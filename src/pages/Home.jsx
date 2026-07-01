import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import CorePillars from "../components/home/CorePillars";
import AboutSection from "../components/home/AboutSection";
import ImpactStats from "../components/home/ImpactStats";
import ProgramsSection from "../components/home/ProgramsSection";



const Home = () => {
  return (
    <Layout>
      <Hero />
      <CorePillars />
      <AboutSection />
      <ImpactStats />
      <ProgramsSection />

    </Layout>
  );
};

export default Home;