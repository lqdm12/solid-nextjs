import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "NexusVest Focado na Vunesp",
  description: "Está é a Home da NexusVest",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Pricing />
      <Testimonial />
      <About />
      <FeaturesTab />
      <Feature />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Brands />
      <Contact />
      <Blog />
    </main>
  );
}
