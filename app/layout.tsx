import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans  = IBM_Plex_Sans({ 
  display: 'swap', 
  subsets: ["latin"],
  weight: ['500', '600', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        {children}
        <footer className="mt-auto bg-violet-900 py-6 text-lg text-white">
          <div className="text-center">By Acodercalledcole</div>
        </footer>  
      </body>
    </html>
  );
}
