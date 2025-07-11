// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">💊 Welcome to Medication Tracker</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => navigate('/patient')}
          className="bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-xl"
        >
          I'm the Patient
        </button>
        <button
          onClick={() => navigate('/caretaker')}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-xl"
        >
          I'm the Caretaker
        </button>
      </div>
    </div>
  );
}
