import Hero from "../components/home/Hero";
import CorePillars from "../components/home/CorePillars";
import AboutSection from "../components/home/AboutSection";
import ImpactStats from "../components/home/ImpactStats";
import ProgramsSection from "../components/home/ProgramsSection";
import Testimonials from "../components/home/Testimonials";
import GetInvolved from "../components/home/GetInvolved";
import Partners from "../components/home/Partners";
import Newsletter from "../components/home/Newsletter";



const Home = () => {
  return (
    <>
     <Hero />
      <CorePillars />
      <AboutSection />
      <ImpactStats />
      <ProgramsSection />
      <Testimonials />
      <GetInvolved />
      <Partners />
      <Newsletter />
    </>
      

    
  );
};

export default Home;