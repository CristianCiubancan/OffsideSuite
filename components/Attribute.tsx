import React from "react";
import styles from "./Attribute.module.css";
import useWindowSize from "./useWindowSize";
interface IAttributeProps {
  text: {
    key: number;
    value: string;
  };
  style?: React.CSSProperties;
}

const Attribute = ({ text, style }: IAttributeProps) => {
  const { width } = useWindowSize();

  const fontSize = ((style?.fontSize as string) || "").split("em")[0];
  const usedFontSize = fontSize?.length ? parseFloat(fontSize) : undefined;
  console.log("fontSize", fontSize);
  return (
    <span
      id={`attribute-${text.key}-${text.value}`}
      className={`${styles["attribute-element"]}`}
      style={{
        ...style,
        fontSize: usedFontSize
          ? `${usedFontSize * ((width || 3840 * 0.9) / (3840 * 0.9))}em`
          : undefined,
      }}
    >
      {text.value}
    </span>
  );
};

export default Attribute;
