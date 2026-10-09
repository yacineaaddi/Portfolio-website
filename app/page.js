"use client";

import Services from "./components/Services";
import Contact from "./components/Contact";
import Degrees from "./components/Degrees";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Background from "./ui/Background";
import About from "./components/About";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" />
      <Background />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Degrees />
      <Contact />
      <Footer />
    </>
  );
}
