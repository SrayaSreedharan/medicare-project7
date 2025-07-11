import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
          🌿 Welcome to <span className="text-pink-600">MediCare</span>
        </h1>
        <p className="text-gray-700 mb-10 text-lg">Choose your role to get started:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Patient Button */}
          <button
            onClick={() => navigate('/patient')}
            className="flex flex-col items-center gap-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            {/* <UserHeart size={36} /> */}
            <span className="text-lg font-semibold">I'm a Patient</span>
          </button>

          {/* Caretaker Button */}
          <button
            onClick={() => navigate('/caretaker')}
            className="flex flex-col items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            {/* <Stethoscope size={36} /> */}
            <span className="text-lg font-semibold">I'm a Caretaker</span>
          </button>
        </div>
      </div>
    </div>
  );
}
