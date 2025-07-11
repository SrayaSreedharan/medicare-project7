// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-indigo-200 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">💊 Medication Tracker</h1>
        <p className="text-gray-600 mb-8">
          Helping patients remember their medications and notifying caretakers.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/patient')}
            className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 rounded-xl transition duration-200"
          >
            👩‍⚕️ I am the Patient
          </button>
          <button
            onClick={() => navigate('/caretaker')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-xl transition duration-200"
          >
            👨‍🔬 I am the Caretaker
          </button>
        </div>
      </div>
    </div>
  );
}
