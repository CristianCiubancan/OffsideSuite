"use client";

import { useEffect, useState } from "react";

const LogoHover = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      // make
    }
  }, [isOpen]);
  // return a fixed position div that takes up the entire screen and has an absolutely centered div that prints the text "hello world" and if the text is pressed it transitions the first div to height 0 and width 0 and the second div from centered to out of the screen
  return <div></div>;
};

export default LogoHover;
