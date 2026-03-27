import { useState, useEffect } from "react";

const roles = [
  "AI/ML Engineer",
  "Backend Developer",
  "Founding Engineer",
  "Builder",
  "Problem Solver",
];

const TypewriterEffect = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className="text-primary">
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypewriterEffect;
