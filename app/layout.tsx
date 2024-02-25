import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { getDomain } from "@/utils";

const ibmPlexSans  = IBM_Plex_Sans({ 
  display: 'swap', 
  subsets: ["latin"],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Coffee Connoisseur',
  description: 'Allows you to discover coffee shops near you',
  metadataBase: getDomain(),
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
