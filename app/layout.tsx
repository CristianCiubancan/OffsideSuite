import { AuthProvider } from "@/components/contexts/auth-context";
import { BookingsProvider } from "@/components/contexts/bookings-context";
import { ModalProvider } from "@/components/contexts/modal-context";
import { UnfinishedFormsProvider } from "@/components/contexts/unfinished-forms-context";
import Footer from "@/components/primitives/main-footer";
import Header from "@/components/primitives/main-header";
import ModalRegistrar from "@/components/uitls/modal-registrar";
import "@/styles/global.css";
import "@/styles/styles.css";
import { Raleway } from "next/font/google";
import { ToastContainer } from "react-toastify";
const raleway = Raleway({
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
      <body className={`position-relative ${raleway.className}`}>
        <ModalProvider>
          {/* <AuthProvider> */}
          {/* <BookingsProvider> */}
          <UnfinishedFormsProvider>
            <>
              <Header />
              {children}
              <Footer />
              <ModalRegistrar />
              <ToastContainer />
            </>
          </UnfinishedFormsProvider>
          {/* </BookingsProvider> */}
          {/* </AuthProvider> */}
        </ModalProvider>
      </body>
    </html>
  );
}
