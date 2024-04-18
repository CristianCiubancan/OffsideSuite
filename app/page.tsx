import ContactForm from "@/components/forms/contact";
import OffsideHero from "@/components/offside-hero";
export const metadata = {
  // we are Offside Music, we de all sorts of media, this is the most optimized title discription and metadata for our landing page
  title: "Offside Music - Creative Media Agency",
  description:
    "We are a creative media agency based in Bucharest specializing in music, video, lyrics, publicity, websiste and app development. Let's collaborate!",
  keywords:
    "Offside Music, creative agency, music production, video production, web development, app development, lyrics writing, publicity",
  image: "/images/hero.jpg",
  url: "https://offsidemusic.ro",
  type: "website",
  siteName: "Offside Music",
  locale: "en_US",
  // TODO: sa punem astea legit
  // twitter: "@offsidemusic",
  // facebook: "offsidemusic",
  // instagram: "offsidemusic",
  youtube: "@OffsideMusicOfficial",
  // linkedin: "offside-music",
  email: "business@offsidemusic.ro",
};

export default function Page() {
  return (
    <div>
      <OffsideHero />
      <div className="w-full min-h-screen flex justify-center items-center p-4">
        <ContactForm />
      </div>
      <div className="w-full min-h-screen flex justify-center items-center p-4 bg-yellow-500"></div>
    </div>
  );
}
