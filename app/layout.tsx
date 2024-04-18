import Header from "@/components/primitives/main-header";
import "@/styles/global.css";
import "@/styles/styles.css";
import { Bebas_Neue } from "next/font/google";
import Head from "next/head";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <body className="position-relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
