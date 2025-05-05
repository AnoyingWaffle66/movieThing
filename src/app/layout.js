import "./globals.css";

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>

        </header>
        
        <section>
          {children}
        </section>
      
      </body>
    </html>
  );
}
