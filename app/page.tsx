import CoolHeadings from "@/components/CoolHeadings";
import OffsideHeading from "@/components/OffsideHeading";
import OffsideHero from "@/components/OffsideHero";

export const metadata = {
  title: "Salut Andrei",
};

export default function Page() {
  return (
    <div>
      <OffsideHero />
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
        <OffsideHeading />
      </div>
      {/* <div className="h-dvh w-full bg-gradient-to-br from-[#2c5364] to-[#203a43] flex flex-col items-center justify-center">
        <OffsideHeading />
      </div> */}
      {/* a hero section with a video background with an image placeholder while the video is first loading */}
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
        <CoolHeadings />
      </div>
    </div>
  );
}
