import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Perennial Hotels",
  description: "this is perennial hotels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-display">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}