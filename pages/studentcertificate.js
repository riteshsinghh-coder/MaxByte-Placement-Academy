import { useEffect, useState } from 'react';
import Head from 'next/head';
import CertificateView from '../components/CertificateView';

export default function StudentCertificate() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the UID from the query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const uid = queryParams.get('uid')?.trim(); // Added trim() to remove whitespace

    if (!uid) {
      setError('No student UID provided in the URL');
      setLoading(false);
      return;
    }

    // Fetch student data
    fetch('/students.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        return response.json();
      })
      .then(data => {
        const foundStudent = data.students.find(s => 
          s.uid.toLowerCase() === uid.toLowerCase() // Case-insensitive comparison
        );
        
        if (foundStudent) {
          setStudent(foundStudent);
        } else {
          setError(`Student with UID "${uid}" not found`);
        }
      })
      .catch(err => {
        setError('Failed to load student data. Please try again later.');
        console.error('Error fetching student data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading certificate...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 bg-red-50 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-red-800">{error}</p>
          <p className="mt-4 text-gray-600">
            Please check the URL or contact support if you believe this is an error.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{student ? `${student.name}'s Certificate` : 'Certificate Verification'}</title>
        <meta name="description" content="Verify student certificate from MaxByte Placement Academy" />
      </Head>
      
      <main className="min-h-screen bg-gray-50 py-8">
        {student && <CertificateView student={student} />}
      </main>
    </>
  );
}