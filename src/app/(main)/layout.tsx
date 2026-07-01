import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">{children}</main>
      <Footer />
    </>
  );
}
