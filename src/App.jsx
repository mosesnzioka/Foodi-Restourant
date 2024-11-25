import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Hero/>
        <ServicesSection/>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
