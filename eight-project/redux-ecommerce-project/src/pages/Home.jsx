import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import Offers from "../components/Offers";
import ProductGrid from "../components/ProductGrid";
import BrandLogos from "../components/BrandLogos";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <Banner />
      <Offers />
      <ProductGrid />
      <BrandLogos />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
