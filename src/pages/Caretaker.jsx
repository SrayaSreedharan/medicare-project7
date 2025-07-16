import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import Footer from './Footer';

export default function Caretaker() {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  const addMedication = async () => {
    if (!name || !dosage) return alert('Enter medication name and dosage');

    const { error } = await supabase.from('medications').insert([
      {
        id: uuidv4(),
        name,
        dosage,
        taken_today: false,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) alert('Failed to add');
    else {
      setName('');
      setDosage('');
      alert('Medication added');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Add Medication</h2>
          <input className="w-full mb-4 p-3 border border-blue-300 rounded-lg" placeholder="Medication Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input className="w-full mb-4 p-3 border border-blue-300 rounded-lg" placeholder="Dosage (e.g. 5mg)" value={dosage} onChange={(e) => setDosage(e.target.value)}/>
          <button onClick={addMedication} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg" >
            ➕ Add
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
