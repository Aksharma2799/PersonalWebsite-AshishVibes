import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Ensure you create a corresponding CSS file for styles

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 100px from the top of the document
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button className="scroll-to-top fonr-bold" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
