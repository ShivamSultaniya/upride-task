import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import FounderPerspective from "./components/FounderPerspective"
import UniqueApproach from "./components/UniqueApproach";
import SpecialitySection from "./components/SpecialitySection"
import GallerySection from "./components/GallerySection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <MissionVision></MissionVision>
      <FounderPerspective></FounderPerspective>
      <UniqueApproach></UniqueApproach>
      <SpecialitySection></SpecialitySection>
      <GallerySection></GallerySection>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </>
  );
}
