import "@/styles/global.css";
import "@/styles/styles.css";
import { Calligraffitti } from "next/font/google";

const calligraffitti = Calligraffitti({
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
      <body className="position-relative">
        {/* a blurred navbar */}
        <div className="w-full h-16 fixed top-0 left-0 z-10 overflow-hidden rounded-md">
          <div className="blur-2xl h-16 w-full bg-red-700 flex justify-between absolute top-0 left-0"></div>
          <div
            className={`h-16 w-full flex justify-between items-center absolute z-20 top-0 left-0 p-4 text-white ${calligraffitti.className}`}
          >
            <div className="font-bold text-2xl">OffisdeMusic</div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-600 text-lg">
              Menu
            </button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
