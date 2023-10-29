import { NavBar } from "@/components/NavBar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "News App",
  description: "From here you will get live updates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
          <NavBar />
          <div className="max-w-6xl mx-auto px-5">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
