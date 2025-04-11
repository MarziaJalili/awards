import { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef();

  // applying styles...
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    // doing freaking math!!!
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - left) / height;

    const tiltX = (relativeX - 0.5) * 7;
    const tiltY = (relativeY - 0.5) * -7;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = (e) => {
    setTransformStyle("");
  };

  return (
    <div
      key={children}
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
