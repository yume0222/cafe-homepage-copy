import "./globals.css";
import type { Metadata } from "next";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Instagram from "./_components/Instagram";

export const metadata: Metadata = {
  metadataBase: new URL("https://cafe-homepage-copy.vercel.app"),
  title: {
    template: "%s | カフェのホームページ",
    default: "カフェのホームページ",
  },
  description:
    "模写修行のカフェのホームページをNext.js＋ヘッドレスCMSで作成したサイトです。",
  openGraph: {
    title: "カフェのホームページ",
    description:
      "模写修行のカフェのホームページをNext.js＋ヘッドレスCMSで作成したサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://cafe-homepage-copy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Instagram />
        <Footer />
      </body>
    </html>
  );
}
