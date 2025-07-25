
import { useState, useEffect } from 'react';

const GreetingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const greetings = [
    "Hello",
    "Hola", 
    "Bonjour",
    "नमस्ते", // Hindi
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "Ciao", // Italian
    "Hallo", // German
    "Olá", // Portuguese
    "Привет" // Russian
  ];

  useEffect(() => {
    let greetingInterval: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    // Cycle through greetings
    greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 250); // Change greeting every 250ms

    // Hide animation after 2.5 seconds
    hideTimeout = setTimeout(() => {
      setIsVisible(false);
      clearInterval(greetingInterval);
      // Wait for fade out animation to complete
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(hideTimeout);
    };
  }, [onComplete, greetings.length]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-out">
        <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide animate-fade-out">
          {greetings[currentGreeting]}
        </h1>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide animate-fade-in">
        {greetings[currentGreeting]}
      </h1>
    </div>
  );
};

export default GreetingAnimation;
