import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { CheckCircle } from 'lucide-react';

export default function Patient() {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  const fetchMedications = async () => {
    const { data, error } = await supabase
      .from('medications')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) console.error(error);
    else setMedications(data);
  };

  const addMedication = async () => {
    if (!name || !dosage) return alert('Enter both name and dosage');

    const { error } = await supabase.from('medications').insert([
      {
        id: uuidv4(),
        name,
        dosage,
        taken_today: false,
      },
    ]);

    if (error) alert('Error adding medication');
    else {
      setName('');
      setDosage('');
      fetchMedications();
    }
  };

  const markAsTaken = async (id) => {
    const { error } = await supabase
      .from('medications')
      .update({ taken_today: true })
      .eq('id', id);

    if (error) alert('Failed to update');
    else fetchMedications();
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          💊 Patient Dashboard
        </h1>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
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

        {/* Table */}
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Today’s Medications
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow">
            <thead className="bg-blue-200 text-blue-800">
              <tr>
                <th className="text-left px-4 py-3">Medication Name</th>
                <th className="text-left px-4 py-3">Dosage</th>
                <th className="text-left px-4 py-3">Taken</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med) => (
                <tr
                  key={med.id}
                  className="border-t border-gray-200 hover:bg-blue-50"
                >
                  <td className="px-4 py-3 font-medium text-blue-900">
                    {med.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{med.dosage}</td>
                  <td className="px-4 py-3">
                    {med.taken_today ? (
                      <span className="text-green-600 font-semibold flex items-center gap-1">
                        <CheckCircle size={18} />
                        Taken
                      </span>
                    ) : (
                      <button
                        onClick={() => markAsTaken(med.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        Mark as Taken
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
