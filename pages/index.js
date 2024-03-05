import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>UCAE Global Services</title>
        <meta
          name="description"
          content="UCAE Global Services is a versatile and modern facility that combines the convenience of a traditional business center with the amenities of a Cybercafe."
        />
        <link rel="icon" href="img/WhatsApp Image 2024-02-03 at 19.23.09_1b9b2ddf.jpg.png"/>
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="UCAE Benefits"
        title=" Here are the Services we provide">
        Unlock a World of Services: Elevate Your Business Experience with Our Comprehensive Business Center and CyberCafe Solutions!
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Elevate your experience with UCAE">
        Connect, create, and conquer at UCAE CyberCafe & Business Center – your ultimate hub for productivity and innovation.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Reasons"
        title="Here are three reasons">
        This section indicates three main reasons why you should choose us, see some benefits of choosing UCAE!
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      Unlocking Clarity: Delve into Our Comprehensive FAQ Section for In-Depth Answers
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
