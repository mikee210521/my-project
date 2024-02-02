import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>Technical Test</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
      <body className={mont.className}>{children}</body>
    </html>
  );
}
