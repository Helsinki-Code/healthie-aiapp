import React from 'react';
import { Clock } from 'lucide-react';

const History = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Report History</h2>
        
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {/* Sample history items - replace with actual data */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Annual Health Checkup</h3>
                  <p className="text-sm text-gray-500">March 15, 2024</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Report
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Blood Test Results</h3>
                  <p className="text-sm text-gray-500">February 28, 2024</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;