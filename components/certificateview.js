import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CertificateView({ student }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden certificate-paper">
      {/* Certificate Header */}
      <div className="bg-blue-700 text-white py-6 px-8 text-center">
        <h1 className="text-3xl font-bold">MaxByte Placement Academy</h1>
        <p className="mt-2">Certificate of Completion</p>
      </div>
      
      {/* Student Photo and Basic Info */}
      <div className="flex flex-col md:flex-row p-6 border-b">
        <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 relative">
            <Image
              src={student.photo || '/assets/students/default.jpg'}
              alt={student.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              onError={(e) => {
                e.target.src = '/assets/students/default.jpg';
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 pl-0 md:pl-6">
          <h2 className="text-2xl font-bold text-blue-800">{student.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-600"><span className="font-semibold">Father&apos;s Name:</span> {student.fatherName}</p>
              <p className="text-gray-600"><span className="font-semibold">Gender:</span> {student.gender}</p>
              <p className="text-gray-600"><span className="font-semibold">Mobile:</span> {student.mobile}</p>
            </div>
            <div>
              <p className="text-gray-600"><span className="font-semibold">Date of Birth:</span> {student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}</p>
              <p className="text-gray-600"><span className="font-semibold">Course:</span> {student.course}</p>
              <p className="text-gray-600"><span className="font-semibold">Address:</span> {student.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Completion Details */}
      <div className="p-6">
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">has successfully completed the</p>
          <h3 className="text-2xl font-bold text-blue-700">{student.course}</h3>
          <p className="text-gray-600 mt-2">
            with a final grade of <span className="font-bold">{student.marks}%</span>
          </p>
          <p className="text-gray-600 mt-2">
            on <span className="font-semibold">{student.completionDate ? new Date(student.completionDate).toLocaleDateString() : 'N/A'}</span>
          </p>
        </div>

        {/* Verification Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified Certificate
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">ID: {student.certificateId}</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-48 border-t border-gray-300 pt-2">
              <p className="text-sm font-semibold">Instructor</p>
              <p>{student.instructor}</p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Info */}
      <div className="text-center text-sm text-gray-500 p-4 bg-gray-50">
        <p>This certificate can be verified by scanning the QR code or visiting:</p>
        <p className="mt-1 font-mono text-blue-600 break-all">
          {typeof window !== 'undefined' ? window.location.href : 'Loading...'}
        </p>
      </div>
    </div>
  );
}