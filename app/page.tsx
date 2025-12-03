import FeautureSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";


export default function Home() {
  return (
   <>
     <Header />
     <HeroSection/>
     <FeautureSection/>
     <PricingSection/>
    {/* <CtaSection/> */}
    <Footer/>

   </>
  );
}
