// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">💊 Medication Tracker</h1>
        <p className="text-gray-600 mb-8 text-base">
          Helping patients remember their medications <br /> and notifying caretakers if missed.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/patient')}
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-xl transition duration-200"
          >
            👩‍⚕️ I'm the Patient
          </button>
          <button
            onClick={() => navigate('/caretaker')}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition duration-200"
          >
            👨‍🔬 I'm the Caretaker
          </button>
        </div>
      </div>
    </div>
  );
}
