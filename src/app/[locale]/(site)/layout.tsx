import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";


type Props = {
  children: React.ReactNode;
};


export default function SiteLayout({
  children
}: Props) {

  return (
    <>
      <Header />

      <main className="pt-[58px] lg:pt-[131px] relative">
        {children}
      </main>

      <Footer />
    </>
  );
}