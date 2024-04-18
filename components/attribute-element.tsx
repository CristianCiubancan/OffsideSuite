import React, { useMemo } from "react";
import styles from "./Attribute.module.css";
import useWindowSize from "./useWindowSize";
interface IAttributeProps {
  text: {
    key: number;
    value: string;
  };
  className?: string;
  style?: React.CSSProperties;
}
const Attribute = ({ text, style, className }: IAttributeProps) => {
  const { width: windowWidth } = useWindowSize();

  const width = windowWidth || 0;

  const multiplier = useMemo(() => {
    return width > 500 ? 0.9 : 0.5;
  }, [width]);

  const fontRatio = useMemo(() => {
    return 3840 * multiplier;
  }, [width]);

  const fontSize = ((style?.fontSize as string) || "").split("em")[0];

  const usedFontSize = fontSize?.length ? parseFloat(fontSize) : undefined;

  return (
    <span
      id={`attribute-${text.key}-${text.value}`}
      className={`${styles["attribute-element"]} ${className}`}
      style={{
        ...style,
        fontSize: usedFontSize
          ? `${usedFontSize * ((width || fontRatio) / fontRatio)}em`
          : undefined,
      }}
    >
      {text.value}
    </span>
  );
};

export default Attribute;
