import PageHero from "../components/common/PageHero";
import ProgramsSection from "../components/home/ProgramsSection";

const Programs = () => {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Creating sustainable impact through community-driven initiatives."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
      />

      <ProgramsSection />
    </>
  );
};

export default Programs;