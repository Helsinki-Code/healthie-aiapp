import { getDocument } from 'pdfjs-dist';
import { createWorker } from 'tesseract.js';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export async function processReport(file: File) {
  let text = '';

  if (file.type === 'application/pdf') {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await getDocument({ data: arrayBuffer }).promise;
    const numPages = pdf.numPages;
    const textContent = [];
    
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item: any) => item.str).join(' ');
      textContent.push(pageText);
    }
    
    text = textContent.join('\n');
  } else {
    // Image processing with OCR
    const worker = await createWorker();
    const { data: { text: ocrText } } = await worker.recognize(file);
    await worker.terminate();
    text = ocrText;
  }

  // Process with Claude
  const response = await anthropic.messages.create({
    model: "claude-3.5-sonnet-20240229",
    max_tokens: 4096,
    messages: [{
      role: "user",
      content: `Analyze this health report and provide insights: ${text}`
    }]
  });

  // Store results in MongoDB through API
  await storeAnalysis(response.content);

  return response.content;
}

async function storeAnalysis(analysis: any) {
  try {
    const response = await fetch('/api/store-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ analysis }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to store analysis');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error storing analysis:', error);
    throw error;
  }
}
