import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Instagram from "./_components/Instagram";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Instagram />
        <Footer />
      </body>
    </html>
  );
}
