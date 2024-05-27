import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInAnimation, fadeOutAnimation } from "../utils/animations";
import { useIntersection } from "react-use";

const ScrollReveallComponent = ({
  children,
  className = "",
  far = 500,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  far?: number;
  delay?: number;
}) => {
  // INTERSECTION
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: `${far}px`,
    threshold: 0.2,
  });

  // GSAP
  const [isReveall, setIsReveall] = useState(false);
  useGSAP(() => {
    setTimeout(() => {
      if (intersection && !isReveall && intersection.intersectionRatio >= 0.2) {
        fadeInAnimation([sectionRef.current]);
        setIsReveall(true);
      }
    }, delay);
  }, [intersection]);
  return (
    <div ref={sectionRef} className={`${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveallComponent;
