import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Activity, Heart, Weight, 
  Thermometer, Clock, Bell 
} from 'lucide-react';

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Latest Vitals</h3>
            <Activity className="text-blue-500 w-6 h-6" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-gray-600">Heart Rate</span>
              </div>
              <span className="font-semibold">72 bpm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Weight className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600">Weight</span>
              </div>
              <span className="font-semibold">68 kg</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Thermometer className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-gray-600">Temperature</span>
              </div>
              <span className="font-semibold">36.6°C</span>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Appointments</h3>
            <Clock className="text-purple-500 w-6 h-6" />
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm font-medium text-purple-900">Annual Checkup</p>
              <p className="text-xs text-purple-700">Tomorrow at 10:00 AM</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-900">Blood Test</p>
              <p className="text-xs text-blue-700">Next Week, Monday 9:00 AM</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            <Bell className="text-yellow-500 w-6 h-6" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <div className="ml-3">
                <p className="text-sm font-medium text-yellow-900">
                  Medication Reminder
                </p>
                <p className="text-xs text-yellow-700">
                  Take your evening medication in 1 hour
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="ml-3">
                <p className="text-sm font-medium text-green-900">
                  Goal Achieved
                </p>
                <p className="text-xs text-green-700">
                  You've reached your daily step goal!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Health Trends
          </h3>
          {/* Add Chart.js implementation here */}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Activity Summary
          </h3>
          {/* Add Chart.js implementation here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
