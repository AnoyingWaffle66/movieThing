import "./globals.css";

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-center items-center space-x-4">
          <Link href={"/"}>Home page</Link>
          <Link href={"/movies"}>Movies page</Link>
        </header>
        
        <section className="mt-5">
          {children}
        </section>
      
      </body>
    </html>
  );
}
