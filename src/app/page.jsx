import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RelativeTour from "@/components/RelativeTour";
import Section from "@/components/Section";
import TagSection from "@/components/TagSection";

const page = () => {
  return (
    <div className=" text-sm">
      <Navbar />
      <HeroSection />
      <TagSection />
      <RelativeTour />
      <Section />
      <Footer />
    </div>
  );
};

export default page;
