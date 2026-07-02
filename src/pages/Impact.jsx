import PageHero from "../components/common/PageHero";
import ImpactStats from "../components/home/ImpactStats";
import Testimonials from "../components/home/Testimonials";

const Impact = () => {
  return (
    <>
      <PageHero
        title="Our Impact"
        subtitle="Measuring the lives changed through our initiatives."
        image="https://images.unsplash.com/photo-1469571486292-b53601020f1f?auto=format&fit=crop&w=1600&q=80"
      />

      <ImpactStats />
      <Testimonials />
    </>
  );
};

export default Impact;