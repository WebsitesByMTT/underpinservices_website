import Banner from "@/components/Banner";
import { WhyChooseUnderpin } from "@/components/Why-Choose-Underpin";
import NotJustAverageAgency from "@/components/others/NotJustAverageAgency";
import Services from "@/components/others/Services";
import Vision from "@/components/others/Vision";


export default function Home() {
  return (
    <main>
      <Banner />
      <WhyChooseUnderpin /> 
      <Vision />
      <Services />
      <NotJustAverageAgency />
    </main>
  );
}
