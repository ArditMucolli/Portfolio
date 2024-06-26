import { DataProvider } from "@/context/DataContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "This is a portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
