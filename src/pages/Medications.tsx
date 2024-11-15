import React from 'react';
import { Pill, Plus, AlertCircle } from 'lucide-react';

const Medications = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Medications</h2>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Medication
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Pill className="w-5 h-5 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Vitamin D3</h3>
                  <p className="text-sm text-gray-500">1 tablet daily</p>
                </div>
              </div>
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-sm text-gray-600">Next dose in 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medications;