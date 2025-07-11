// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Never Miss a Dose Again
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          A smart and simple medication reminder system for both patients and caretakers.
        </p>
      </div>

      {/* Card Section */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-2xl text-center border border-indigo-100">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">💡 How It Works</h2>
          <ul className="text-gray-700 text-left text-base space-y-2 list-disc list-inside">
            <li><strong>Caretaker:</strong> Adds daily medications with name and dosage.</li>
            <li><strong>Patient:</strong> Views list and marks each as "Taken" daily.</li>
            <li><strong>Alert:</strong> If not marked by 8PM, caretaker receives an email.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/patient')}
            className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white text-lg rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-200"
          >
            👩‍⚕️ I’m the Patient <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate('/caretaker')}
            className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-200"
          >
            👨‍🔬 I’m the Caretaker <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer (Optional) */}
      <div className="mt-10 text-center text-sm text-gray-500">
        Built with ❤️ for health & wellbeing
      </div>
    </div>
  );
}
