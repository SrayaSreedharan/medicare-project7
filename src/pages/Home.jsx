import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl p-10 border border-gray-200">
      
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Never Miss a Dose Again</h1>
          <p className="text-gray-600 mt-2 text-base">
            A smart and simple medication reminder system for both patients and caretakers.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">💡 How It Works</h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside text-left">
            <li><strong>Caretaker:</strong> Adds daily medications with name and dosage.</li>
            <li><strong>Patient:</strong> Views list and marks each as "Taken" daily.</li>
            <li><strong>Reminder:</strong> If not marked by 8PM, caretaker receives an email.</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/patient')}
            className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white text-lg rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            👩‍⚕️ I'm the Patient
          </button>
          <button
            onClick={() => navigate('/caretaker')}
            className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            👨‍🔬 I'm the Caretaker
          </button>
        </div>
      </div>
    </div>
  );
}
