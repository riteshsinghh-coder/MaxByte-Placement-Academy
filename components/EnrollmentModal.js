import emailjs from 'emailjs-com';
import { useState } from 'react';

function EnrollmentModal({ onClose, onEnroll, courseId }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleEnroll = async () => {
    try {
      let courseName = '';
      if (courseId === '1') {
        courseName = 'Basic';
      } else if (courseId === '2') {
        courseName = 'Placement Program';
      } else if (courseId === '3') {
        courseName = 'Web Development';
      }
      
      const message = `Enrolling ${name} with phone number ${phone} to course ${courseName}`;
      await emailjs.send('service_kk0u969', 'template_5p41szi', {
        from_name: name,
        message: message,
      }, 'm9-aWKjDj2DH6wpco');
  
      // After email is sent successfully, redirect to WhatsApp group
      const whatsappGroupLink = "https://chat.whatsapp.com/JeKWQKQFZc5GbbPOE4oS9k";
      window.open(whatsappGroupLink, '_blank');
      
      alert('Our Team Will Contact You');
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Enroll</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-4"
          >
            Cancel
          </button>
          <button
            onClick={handleEnroll}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentModal;
