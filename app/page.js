"use client";

import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Services />
    </>
  );
}
