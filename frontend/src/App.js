import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Preloader from "@/components/site/Preloader";
import CustomCursor from "@/components/site/CustomCursor";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Portfolio from "@/components/site/Portfolio";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import WhyChoose from "@/components/site/WhyChoose";
import Testimonials from "@/components/site/Testimonials";
import TrustedBy from "@/components/site/TrustedBy";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <WhyChoose />
      <Testimonials />
      <TrustedBy />
      <Contact />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    document.body.style.overflow = loaded ? "auto" : "hidden";
  }, [loaded]);

  return (
    <div className="App">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
