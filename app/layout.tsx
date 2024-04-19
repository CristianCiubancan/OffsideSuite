import Header from "@/components/primitives/main-header";
import "@/styles/global.css";
import "@/styles/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-red-700">
      {/* the following is a selective fix for IPhone's safari's zoom on input touch/focus */}
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
        content="We are a creative media agency based in Bucharest specializing in music, video, lyrics, publicity, websiste and app development. Let's collaborate!"
      />
      <meta property="fb:app_id" content="450961180645048" />
      <meta property="og:image:alt" content="OffsideMusic logo banner" />
      <body className="position-relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
