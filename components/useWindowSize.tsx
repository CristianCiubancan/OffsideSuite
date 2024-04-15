import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      //Update window size state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Initial call on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array: run only on mount and unmount

  return windowSize;
}

export default useWindowSize;
