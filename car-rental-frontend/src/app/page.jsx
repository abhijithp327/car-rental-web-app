import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Filter from './components/filter/Filter';
import PopularCars from './components/car-show-case/PopularCars';
import RecommendedCars from './components/car-show-case/RecommendedCars';
import Footer from './components/footer/Footer';

const Home = () => {
  return (
    <section >
      <Hero />
      <Filter />
      <PopularCars />
      <RecommendedCars />
    </section>
  );
}

export default Home;
