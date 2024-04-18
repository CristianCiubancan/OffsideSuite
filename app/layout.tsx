import Header from "@/components/primitives/main-header";
import "@/styles/global.css";
import "@/styles/styles.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-red-700">
      {/* the following is a selective fix for IPhone's safari's zoom on input touch/focus */}
      <meta property="og:image" content="/images/og-image.jpg" />
      <body className="position-relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
