"use client";
import { AuthProvider } from "@/components/contexts/auth-context";
import { BookingsProvider } from "@/components/contexts/bookings-context";
import { ModalProvider } from "@/components/contexts/modal-context";
import { UnfinishedFormsProvider } from "@/components/contexts/unfinished-forms-context";
import ModalRegistrar from "@/components/modal-registrar";
import Footer from "@/components/primitives/main-footer";
import Header from "@/components/primitives/main-header";
import "@/styles/global.css";
import "@/styles/styles.css";
import { Syne_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
const syneMono = Syne_Mono({
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
      {/* Include the title and meta description inside the Head */}
      <title>Offside Music - Creative Media Agency</title>
      <meta
        name="description"
        content="We are a creative media agency based in Bucharest specializing in music, video, lyrics, publicity, website and app development. Let's collaborate!"
      />

      {/* Open Graph and other meta tags */}
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/og-image.png`}
      />
      <meta property="og:url" content="https://www.offsidemusic.ro/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Offside Music - Creative Media Agency"
      />
      <meta
        property="og:description"
        content="We are a creative media agency based in Bucharest specializing in music, video, lyrics, publicity, website and app development. Let's collaborate!"
      />
      <meta property="fb:app_id" content="450961180645048" />
      <meta property="og:image:alt" content="OffsideMusic logo banner" />
      <body className={`position-relative ${syneMono.className}`}>
        <ModalProvider>
          <AuthProvider>
            <BookingsProvider>
              <UnfinishedFormsProvider>
                <>
                  <Header />
                  {children}
                  <Footer />
                  <ModalRegistrar />
                  <ToastContainer />
                </>
              </UnfinishedFormsProvider>
            </BookingsProvider>
          </AuthProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
