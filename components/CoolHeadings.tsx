"use client";
import { useEffect, useRef } from "react";
import styles from "./CoolHeadings.module.css";
const CoolHeadings = () => {
  const textElements = useRef<HTMLElement[] | null>([]);
  useEffect(() => {
    // Trigger animation with delay between elements
    textElements?.current?.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add(styles["animate-text"]);
        // TODO: add a configurable constant for 300 (delay between texts appearing).
      }, index * 300);
    });
  }, []); // Run the effect only once on component mount
  return (
    <div className="absolute inset-0 z-20 flex p-4 md:p-6">
      <div className="text-white">
        <h2
          ref={(el) =>
            textElements.current &&
            (textElements.current[0] = el as HTMLElement)
          }
          className="text-4xl md:text-6xl font-bold mb-4 opacity-0 translate-x-12"
        >
          Welcome
        </h2>
        <h2
          ref={(el) =>
            textElements.current &&
            (textElements.current[1] = el as HTMLElement)
          }
          className="text-4xl font-bold mb-4 opacity-0 translate-x-12"
        >
          to
        </h2>
        <h2
          ref={(el) =>
            textElements.current &&
            (textElements.current[2] = el as HTMLElement)
          }
          className="text-4xl font-bold mb-4 opacity-0 translate-x-12"
        >
          Salut
        </h2>
        <h2
          ref={(el) =>
            textElements.current &&
            (textElements.current[3] = el as HTMLElement)
          }
          className="text-4xl md:text-6xl font-bold mb-4 opacity-0 translate-x-12"
        >
          Andrei
        </h2>
        <p
          ref={(el) =>
            textElements.current &&
            (textElements.current[4] = el as HTMLElement)
          }
          className="text-lg md:text-xl mb-8 opacity-0 translate-x-12"
        >
          Explore the world of Salut Andrei
        </p>
      </div>
    </div>
  );
};

export default CoolHeadings;
