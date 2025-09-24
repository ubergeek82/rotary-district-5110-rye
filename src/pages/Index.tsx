import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExchangePrograms from "@/components/ExchangePrograms";
import HostFamilies from "@/components/HostFamilies";
import Volunteers from "@/components/Volunteers";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ExchangePrograms />
        <HostFamilies />
        <Volunteers />
        <Calendar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
