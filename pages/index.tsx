import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
