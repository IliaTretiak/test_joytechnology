import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "test_joytechnology",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main id="root">{children}</main>
      </body>
    </html>
  );
}
