import Header from "@/components/Layout/Header";
import "../styles/main.scss";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Pavan Ande | Front-End Developer | React.js & Next.js Expert | High-Performance Websites",
  description: "Welcome to my personal portfolio showcasing my work",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" >
      <body className="antialiased bg-white text-gray-900 font-sans dark:bg-black dark:text-white max-w-6xl mx-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
