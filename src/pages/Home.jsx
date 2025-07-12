import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-lg p-10 border border-gray-200 text-center">

        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Never Miss a Dose Again</h1>
          <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
            Smart medication tracking for patients. Peace of mind for caretakers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-full text-3xl">
              👩‍⚕️
            </div>
            <h2 className="text-xl font-semibold text-green-700">I'm the Patient</h2>
            <p className="text-gray-600 text-sm max-w-xs">
              Check your medication list, mark doses as taken, and stay on track with your health.
            </p>
            <button
              onClick={() => navigate('/patient')}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-semibold"
            >
              Go to Patient Dashboard
            </button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full text-3xl">
              🧑‍🔬
            </div>
            <h2 className="text-xl font-semibold text-blue-700">I'm the Caretaker</h2>
            <p className="text-gray-600 text-sm max-w-xs">
              Monitor medication adherence, receive alerts, and ensure your loved ones are supported.
            </p>
            <button
              onClick={() => navigate('/caretaker')}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold"
            >
              Go to Caretaker Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
