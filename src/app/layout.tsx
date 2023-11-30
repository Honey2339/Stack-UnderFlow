import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Navbar from "./_components/navbar";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Stack Outflow",
  description: "t3-app",
  icons: [{ rel: "icon", url: "/bluestack.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
