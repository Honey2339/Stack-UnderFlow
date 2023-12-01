import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Navbar from "./_components/navbar";
import Provider from "./context/provider";
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
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Provider session={session}>
          <TRPCReactProvider headers={headers()}>
            <Navbar />
            {children}
          </TRPCReactProvider>
        </Provider>
      </body>
    </html>
  );
}
