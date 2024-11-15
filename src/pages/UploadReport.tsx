import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FileUp, FileText, Loader } from 'lucide-react';
import { processReport } from '../services/reportProcessing';

function UploadReport() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsProcessing(true);
    setProgress(0);

    const file = acceptedFiles[0];
    try {
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      await processReport(file);
      
      clearInterval(interval);
      setProgress(100);
      
      // Redirect to dashboard after processing
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } catch (error) {
      console.error('Error processing report:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Upload Health Report</h1>
        
        {!isProcessing ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
          >
            <input {...getInputProps()} />
            <FileUp className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-xl text-gray-600 mb-2">
              {isDragActive ? 'Drop your report here' : 'Drag & drop your health report'}
            </p>
            <p className="text-sm text-gray-500">
              Supports PDF and image files (PNG, JPG)
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-6"
            >
              <Loader className="w-12 h-12 text-blue-500" />
            </motion.div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Analyzing your health report...
            </h2>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-blue-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Our AI is carefully analyzing your report. This may take a few moments.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default UploadReport;