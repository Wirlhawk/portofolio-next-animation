import { Inter } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Ray",
  description: "buat pamer doang di eskul yahahaha",
};

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={spaceGrotesk.className}>{children}</body>
      </html>
  );
}
