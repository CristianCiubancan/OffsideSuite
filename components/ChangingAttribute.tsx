"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ChangingAttribute.module.css";
interface IAttribute {
  key: number;
  value: string;
}
interface IChangingAttributeProps {
  attributeOptions: IAttribute[];
  stopOnEnd?: boolean;
  cycleEndCallback?: (state: boolean) => void;
}

const ChangingAttribute = ({
  attributeOptions,
  stopOnEnd = false,
  cycleEndCallback = () => {},
}: IChangingAttributeProps) => {
  const [currentAttribute, setCurrentAttribute] = useState<
    IAttribute | undefined
  >(attributeOptions[0]);
  const [isFadedOut, setIsFadedOut] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleAnimationCycle = async () => {
    setIsFadedOut(true); // Start fade-out
    await new Promise((resolve) => setTimeout(resolve, 600));

    setCurrentAttribute((prevAttribute) => {
      if (!prevAttribute) return;
      const currentIndex = attributeOptions.indexOf(prevAttribute);
      if (currentIndex === attributeOptions.length - 1) {
        // Defer the state update using setTimeout
        setTimeout(() => {
          cycleEndCallback(true);
        }, 0);
        return stopOnEnd ? undefined : attributeOptions[0];
      } else {
        return attributeOptions[currentIndex + 1];
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsFadedOut(false); // Start fade-in
  };

  useEffect(() => {
    timerRef.current = setInterval(handleAnimationCycle, 3050);

    return () => clearInterval(timerRef.current!);
  }, []); // Run only once on component mount

  return currentAttribute ? (
    <span
      className={`text-4xl md:text-6xl font-bold mb-4 ${
        styles["attribute-transition"]
      } ${isFadedOut ? "opacity-0" : ""}`}
    >
      {currentAttribute.value}
    </span>
  ) : null;
};

export default ChangingAttribute;
