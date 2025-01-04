import Features from '@/components/Features';
import { WhyChooseUnderpin } from '@/components/Why-Choose-Underpin';
import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('@/components/Banner'));
const Vision = dynamic(() => import('@/components/others/Vision'));
const Services = dynamic(() => import('@/components/others/Services'));
const NotJustAverageAgency = dynamic(() => import('@/components/others/NotJustAverageAgency'));
const AwardWinning = dynamic(() => import('@/components/Award-Winning'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const OurStory = dynamic(() => import('@/components/OurStory'));
const Testimonials = dynamic(() => import('@/components/ClientSuccess'));
const Faqs = dynamic(() => import('@/components/Faqs'));
const Partners = dynamic(() => import('@/components/Partners'));
const ScheduleButton = dynamic(() => import('@/components/others/scheduleButton'));

export default function Home() {
  return (
    <main>
      <Banner />
      <Vision />
      <Features/>
      <Services />
      <NotJustAverageAgency />
      <WhyChooseUnderpin /> 
      <AwardWinning />
      <Portfolio />
      <OurStory />
      <Testimonials />
      <Faqs />
      <Partners />
      <ScheduleButton /> 
    </main>
  );
}
