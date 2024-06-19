import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  // Add any metadata you need here
};

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <main className='app'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};

export default Layout;
