import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CertificateView({ student }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-4 border-blue-800">
      {/* Certificate Header with decorative elements */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 px-8 text-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 border-2 border-yellow-400 rounded-full"></div>
        
        <h1 className="text-4xl font-bold tracking-wider">MAXBYTE PLACEMENT ACADEMY</h1>
        <p className="mt-2 text-blue-200 text-lg">Certificate of Completion</p>
      </div>
      
      {/* Certificate Body */}
      <div className="p-8 bg-white relative">
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-blue-800"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-blue-800"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-blue-800"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-blue-800"></div>

        {/* Student Information */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg mb-6">This is to certify that</p>
          <h2 className="text-3xl font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200 pb-4 inline-block px-8">
            {student.name}
          </h2>
          <p className="text-gray-700 text-lg mt-6">has successfully completed the course</p>
          <h3 className="text-2xl font-bold text-blue-800 mt-4">{student.course}</h3>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-200 pb-1">Personal Details</h4>
            <p className="text-gray-700 mb-2"><span className="font-medium text-blue-800">Father's Name:</span> {student.fatherName}</p>
            <p className="text-gray-700 mb-2"><span className="font-medium text-blue-800">Date of Birth:</span> {student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}</p>
            <p className="text-gray-700"><span className="font-medium text-blue-800">Gender:</span> {student.gender}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-200 pb-1">Course Details</h4>
            <p className="text-gray-700 mb-2"><span className="font-medium text-blue-800">Completion Date:</span> {student.completionDate ? new Date(student.completionDate).toLocaleDateString() : 'N/A'}</p>
            <p className="text-gray-700 mb-2"><span className="font-medium text-blue-800">Final Grade:</span> <span className="font-bold">{student.marks}</span></p>
            <p className="text-gray-700"><span className="font-medium text-blue-800">Mobile:</span> {student.mobile}</p>
          </div>
        </div>

        {/* Verification and Signatures */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center bg-blue-100 rounded-full px-6 py-2 inline-block">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-blue-900">Verified Certificate</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">ID: <span className="font-mono font-bold">{student.certificateId}</span></p>
            </div>
            
            <div className="text-center">
  {/* Signature Image with placeholder - replace with your actual signature image */}
  <div className="mb-2">
    <Image 
      src="/assets/sign.jpg" // Replace with your actual signature image path
      alt="Authorized Signature"
      width={120}
      height={60}
      className="mx-auto h-16 object-contain"
    />
  </div>
  <div className="h-0.5 w-32 bg-blue-300 mx-auto mb-2"></div>
  <p className="text-sm text-gray-600">Authorized Signature</p>
  <p className="text-xs text-gray-500 mt-1">Director, MaxByte Placement Academy</p>
</div>
          </div>
        </div>
      </div>

      {/* Footer with Verification */}
      <div className="bg-blue-900 text-white p-4 text-center">
        <p className="text-sm mb-2">This certificate can be verified by scanning the QR code or visiting:</p>
        <p className="font-mono text-blue-200 break-all text-sm">
          {typeof window !== 'undefined' ? window.location.href : 'Loading...'}
        </p>
     </div>
    </div>
  );
}