import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyTruckinzy } from './components/WhyTruckinzy';
import { HiringProcess } from './components/HiringProcess';
import { JobCategories } from './components/JobCategories';
import { JobListings } from './components/JobListings';
import { IndustryUseCases } from './components/IndustryUseCases';
import { CandidatePool } from './components/CandidatePool';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhyTruckinzy />
      <HiringProcess />
      <JobCategories />
      <JobListings />
      <CandidatePool />
      <IndustryUseCases />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;