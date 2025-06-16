import { Roboto } from "next/font/google";
import "./css/base/_base.scss";

import Header from "./components/Header";
import WhiteSpace from "./components/WhiteSpace";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        <WhiteSpace />
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
