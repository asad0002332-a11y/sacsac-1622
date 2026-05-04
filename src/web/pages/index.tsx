import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CountryRules from "../components/CountryRules";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

function Index() {
  return (
    <>
      <SchemaMarkup />
      <NavBar />
      <main>
        <Hero />
        <HowItWorks />
        <CountryRules />
        <FAQ />
        <Blog />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Index;
