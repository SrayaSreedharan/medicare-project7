import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { CheckCircle, Clock } from 'lucide-react'; // Install lucide-react

export default function Dashboard() {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  const fetchMedications = async () => {
    const { data, error } = await supabase.from('medications').select('*').order('created_at', { ascending: true });
    if (error) console.error(error);
    else setMedications(data);
  };

  const addMedication = async () => {
    if (!name || !dosage) return alert('Enter both name and dosage');

    const { error } = await supabase.from('medications').insert([
      { id: uuidv4(), name, dosage, taken_today: false }
    ]);
    if (error) alert('Error adding medication');
    else {
      setName('');
      setDosage('');
      fetchMedications();
    }
  };

  const markAsTaken = async (id) => {
    const { error } = await supabase.from('medications').update({ taken_today: true }).eq('id', id);
    if (error) alert('Failed to update');
    else fetchMedications();
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-blue-200 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">💊 Medication Tracker</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <input
            className="border border-blue-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Medication Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-blue-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Dosage (e.g., 5mg)"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
          <button
            onClick={addMedication}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl p-3 transition duration-200"
          >
            ➕ Add Medication
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">Today’s Medications</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {medications.map((med) => (
            <div key={med.id} className="bg-blue-50 p-5 rounded-xl shadow border border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-lg font-bold text-blue-900">{med.name}</p>
                  <p className="text-sm text-gray-600">{med.dosage}</p>
                </div>
                {med.taken_today ? (
                  <CheckCircle className="text-green-500" size={28} />
                ) : (
                  <Clock className="text-yellow-500" size={28} />
                )}
              </div>

              <div className="text-right">
                {med.taken_today ? (
                  <span className="text-green-600 font-semibold">✔ Already Taken</span>
                ) : (
                  <button
                    onClick={() => markAsTaken(med.id)}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl text-sm"
                  >
                    Mark as Taken
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
