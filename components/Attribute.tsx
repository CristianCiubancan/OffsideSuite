import React from "react";
import styles from "./Attribute.module.css";
interface IAttributeProps {
  text: {
    key: number;
    value: string;
  };
  style?: React.CSSProperties;
}

const Attribute = ({ text, style }: IAttributeProps) => {
  return (
    <span
      id={`attribute-${text.key}-${text.value}`}
      className={`${styles["attribute-element"]}`}
      style={{ ...style }}
    >
      {text.value}
    </span>
  );
};

export default Attribute;
