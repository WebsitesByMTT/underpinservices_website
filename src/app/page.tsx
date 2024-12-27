import AwardWinning from "@/components/Award-Winning";
import Banner from "@/components/Banner";
import Testimonials from "@/components/ClientSuccess";
import Faqs from "@/components/Faqs";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import { WhyChooseUnderpin } from "@/components/Why-Choose-Underpin";
import NotJustAverageAgency from "@/components/others/NotJustAverageAgency";
import Services from "@/components/others/Services";
import Vision from "@/components/others/Vision";


export default function Home() {
  return (
    <main>
      <Banner />
      <Vision />
      <Services />
      <NotJustAverageAgency />
      <WhyChooseUnderpin /> 
      <AwardWinning />
      <Portfolio />
      <Faqs />
      <Partners />
      <Testimonials/>
    </main>
  );
}
