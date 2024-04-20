import { useState, useEffect } from 'react';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      // Code to play the video when the component mounts
      const video = document.getElementById('intro-video');
      video.play();
    }
  }, [isOpen]);

  const closeVideo = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '80%', maxWidth: '300px' }}>
            <video id="intro-video" autoPlay muted controls loop style={{ width: '100%', height: 'auto' }}>
              <source src="/assets/lovely add.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={closeVideo} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000, padding: '5px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none', cursor: 'pointer' }}>X</button>
          </div>
        </div>
      )}
    </>
  );
}
