import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

function EnrollmentModal({ onClose, onEnroll, courseId }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Get course name based on ID
  const getCourseName = () => {
    switch(courseId) {
      case '1': return 'Basic Course';
      case '2': return 'Placement Program';
      case '3': return 'Web Development';
      default: return 'Selected Course';
    }
  };

  const handleEnroll = async () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const courseName = getCourseName();
      const message = `Enrolling ${name} with phone number ${phone} to ${courseName}`;
      
      await emailjs.send(
        'service_kk0u969', 
        'template_5p41szi', 
        {
          from_name: name,
          message: message,
          phone_number: phone,
          course_name: courseName
        }, 
        'm9-aWKjDj2DH6wpco'
      );

      setSuccess(true);
      setTimeout(() => {
        const whatsappGroupLink = "https://chat.whatsapp.com/JeKWQKQFZc5GbbPOE4oS9k";
        window.open(whatsappGroupLink, '_blank');
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <motion.h2 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold text-gray-800"
              >
                Enroll in {getCourseName()}
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {success ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enrollment Successful!</h3>
                <p className="text-gray-600 mb-4">Our team will contact you shortly.</p>
                <p className="text-gray-500 text-sm">Redirecting to WhatsApp group...</p>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <motion.input
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)" }}
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <motion.input
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)" }}
                      type="tel"
                      id="phone"
                      placeholder="Enter your WhatsApp number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm p-2 bg-red-50 rounded-lg"
                    >
                      {error}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div 
                  className="flex justify-end gap-3 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#e5e7eb" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-lg font-medium text-gray-700 border border-gray-300"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 4px 14px rgba(124, 58, 237, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleEnroll}
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-lg font-medium text-white bg-purple-600 disabled:bg-purple-400"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Processing...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </motion.button>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default EnrollmentModal;