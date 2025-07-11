import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { CheckCircle } from 'lucide-react';

export default function Patient() {
  const [medications, setMedications] = useState([]);

  const fetchMedications = async () => {
    const { data, error } = await supabase
      .from('medications')
      .select('*')
      .order('created_at', { ascending: true });

    if (!error) setMedications(data);
  };

  const markAsTaken = async (id) => {
    await supabase.from('medications').update({ taken_today: true }).eq('id', id);
    fetchMedications();
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Patient Dashboard</h1>

        <table className="w-full bg-white rounded-lg overflow-hidden shadow border">
          <thead className="bg-indigo-100 text-indigo-800">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Dosage</th>
              <th className="text-left p-3">Taken</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med) => (
              <tr key={med.id} className="border-t hover:bg-indigo-50">
                <td className="p-3">{med.name}</td>
                <td className="p-3">{med.dosage}</td>
                <td className="p-3">
                  {med.taken_today ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircle size={18} /> Taken
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
  );
}
