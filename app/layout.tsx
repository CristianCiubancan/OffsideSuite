import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-700">
      <body className="position-relative">
        {/* a blurred navbar */}
        <div className="w-full h-16 fixed top-0 left-0 z-20 overflow-hidden rounded-md">
          <div className="blur-2xl h-16 w-full bg-zinc-500"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
