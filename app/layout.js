
import { Inter } from "next/font/google";
import "./globals.css";


// Importing Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alpa",
  description: "Experience the future of auditing with compliance solutions made for you.",
  icons: {
    icon: "/images/Favicon.ico?v=4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/Favicon.ico?v=4" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
