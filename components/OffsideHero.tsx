"use client";
import { useEffect, useRef, useState } from "react";
import Attribute from "./Attribute";
import ChangingAttribute from "./ChangingAttribute";
interface IAttribute {
  key: number;
  value: string;
  style: {
    opacity?: number;
  };
}
const initialAttributes = [
  {
    key: 0,
    value: "Creative",
    style: {
      fontSize: "8em",
      fontWeight: "bold",
    },
  },
  {
    key: 1,
    value: "Passionate",
    style: {
      fontSize: "10em",
      fontWeight: "200",
    },
  },
  {
    key: 2,
    value: "Ethical",
    style: {
      fontSize: "3em",
      fontWeight: "bold",
    },
  },
  {
    key: 3,
    value: "Innovative",
    style: {
      fontSize: "8em",
      fontWeight: "300",
    },
  },
  {
    key: 4,
    value: "Diverse",
    style: {
      fontSize: "6em",
      fontWeight: "400",
    },
  },
  {
    key: 5,
    value: "Inclusive",
    style: {
      fontSize: "3em",
      fontWeight: "200",
    },
  },
  {
    key: 6,
    value: "Respectful",
    style: {
      fontSize: "7em",
      fontWeight: "400",
    },
  },
  {
    key: 7,
    value: "Authentic",
    style: {
      fontSize: "2em",
      fontWeight: "400",
    },
  },
  {
    key: 8,
    value: "Empathetic",
    style: {
      fontSize: "12em",
      fontWeight: "300",
    },
  },
  {
    key: 9,
    value: "Collaborative",
    style: {
      fontSize: "5em",
      fontWeight: "200",
    },
  },
  {
    key: 10,
    value: "Inspirational",
    style: {
      fontSize: "2em",
      fontWeight: "200",
    },
  },
  {
    key: 11,
    value: "Purpose-Driven",
    style: {
      fontSize: "6em",
      fontWeight: "400",
    },
  },
  {
    key: 12,
    value: "Community-Focused",
    style: {
      fontSize: "7em",
      fontWeight: "400",
    },
  },
  {
    key: 13,
    value: "Progressive",
    style: {
      fontSize: "5em",
      fontWeight: "400",
    },
  },
  {
    key: 14,
    value: "Sustainable",
    style: {
      fontSize: "4em",
      fontWeight: "400",
    },
  },
  {
    key: 15,
    value: "Transparent",
    style: {
      fontSize: "8em",
      fontWeight: "400",
    },
  },
  {
    key: 16,
    value: "Accountable",
    style: {
      fontSize: "6em",
      fontWeight: "400",
    },
  },
  {
    key: 17,
    value: "Supportive",
    style: {
      fontSize: "7em",
      fontWeight: "400",
    },
  },
  {
    key: 18,
    value: "Forward-Thinking",
    style: {
      fontSize: "5em",
      fontWeight: "400",
    },
  },
  {
    key: 19,
    value: "Equitable",
    style: {
      fontSize: "6em",
      fontWeight: "400",
    },
  },
  {
    key: 20,
    value: "Diligent",
    style: {
      fontSize: "12em",
      fontWeight: "300",
    },
  },
  {
    key: 21,
    value: "Impactful",
    style: {
      fontSize: "6em",
      fontWeight: "bold",
    },
  },
  {
    key: 22,
    value: "Determined",
    style: {
      fontSize: "6em",
      fontWeight: "thin",
    },
  },
  {
    key: 23,
    value: "Bold",
    style: {
      fontSize: "6em",
      fontWeight: "bold",
    },
  },
  {
    key: 24,
    value: "Youthful",
    style: {
      fontSize: "10em",
      fontWeight: "thin",
    },
  },
];

const introTexts = [
  {
    key: 0,
    value: "We are",
  },
  {
    key: 1,
    value: "OffsideMusic",
  },
  {
    key: 2,
    value: "We are",
  },
];

const OffsideHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [canDisplayAttributes, setCanDisplayAttributes] = useState(false);
  const [displayedAllAttributes, setDisplayedAllAttributes] = useState(false);
  const [attributes, setAttributes] = useState<IAttribute[]>([]);
  const cycleEndCallback = (state: boolean) => {
    if (state) {
      const newAttributes = initialAttributes.map((text) => ({
        ...text,
        style: {
          ...text.style,
          opacity: 0,
        },
      }));
      setAttributes(newAttributes);
      setCanDisplayAttributes(true);
    } else {
      setAttributes([]);
    }
  };
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  useEffect(() => {
    if (canDisplayAttributes) {
      // for each attribute we change its opacity to 1
      shuffleArray(attributes).forEach(async (attr, idx) => {
        const element = document.getElementById(
          `attribute-${attr.key}-${attr.value}`
        );
        if (element) {
          // we want to change the opacity to 1 after idx+1 * 300 ms
          setTimeout(() => {
            element.style.opacity = "1";
            if (idx === attributes.length - 1) {
              // attributes.forEach((attr) => {
              //   const element = document.getElementById(
              //     `attribute-${attr.key}-${attr.value}`
              //   );
              //   if (element) {
              //     element.style.opacity = "0";
              //   }
              // });
              setTimeout(() => {
                setDisplayedAllAttributes(true);
              }, 2600);
            } else {
              setTimeout(() => {
                element.style.opacity = "0";
              }, 1500);
            }
          }, (idx + 1) * 300);
        }
      });
    }
  }, [canDisplayAttributes, attributes]);
  useEffect(() => {
    if (canDisplayAttributes && displayedAllAttributes) {
      // we set the opacity of finalHeading to 1 after 1 second
      setTimeout(() => {
        const finalHeading = document.getElementById("finalHeading");
        if (finalHeading) {
          finalHeading.style.opacity = "1";

          // we keep it there for three seconds and set it back to 0
          setTimeout(() => {
            finalHeading.style.opacity = "0";
            setTimeout(() => {
              setDisplayedAllAttributes(false);
              setCanDisplayAttributes(false);
              setAttributes([]);
            }, 5000);
          }, 3000);
        }
      }, 500);
    }
  }, [canDisplayAttributes, displayedAllAttributes]);
  return (
    <div>
      <div className="relative h-dvh overflow-hidden">
        <img
          src="/hero-video-poster.jpeg"
          alt="Blurred Background"
          className="absolute inset-0 z-0 w-full h-full object-cover blur-xl"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <video
          className="absolute inset-0 z-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full relative z-20" ref={heroRef}>
          <div className="w-full h-full flex justify-center items-center text-white">
            {canDisplayAttributes && !displayedAllAttributes ? (
              <div className="flex flex-wrap justify-center gap-16">
                {attributes.map((attr) => (
                  <div key={attr.key}>
                    <span>
                      <Attribute
                        key={attr.key}
                        text={attr}
                        style={attr.style}
                      />
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
            {!canDisplayAttributes && !displayedAllAttributes && (
              <ChangingAttribute
                attributeOptions={introTexts}
                stopOnEnd
                cycleEndCallback={cycleEndCallback}
              />
            )}

            {canDisplayAttributes && displayedAllAttributes ? (
              <div
                id="finalHeading"
                className="text-4xl md:text-6xl font-bold mb-4 opacity-0 delay-500 duration-500 ease-in-out"
              >
                OffsideMusic
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffsideHero;
