import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ loading, setLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800); // Wait for CSS transition
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (!loading && !fadeOut) return null;

  return (
    <div id="loader" className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader">
        <span>{'{'}</span>
        <span>J</span>
        <span>{'}'}</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
