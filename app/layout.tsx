import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "2wonbin's blog",
  description: "2wonbin's blog. A blog about software engineering and my life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
