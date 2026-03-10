import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "LUMOON 路梦｜原创潮玩与数字确权体验品牌",
  description:
    "LUMOON 路梦是融合原创设计、实体收藏与数字确权体验的潮玩品牌。我们为每一件产品建立清晰可信的身份记录，让收藏更真实、更安心、更值得长期参与。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
