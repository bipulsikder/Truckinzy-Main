import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
  // Add structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Truckinzy",
    "url": "https://truckinzy.com",
    "logo": "https://i.postimg.cc/hGNKN3JL/log-def.png",
    "description": "End-to-end workforce recruitment platform specializing in logistics, transportation, and supply chain industry.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "TDI mall, 4th floor",
      "addressLocality": "Rajouri Garden",
      "addressRegion": "New Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9911960107",
      "contactType": "customer service",
      "email": "business@truckinzy.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/truckinzy/",
      "https://www.instagram.com/truckinzy/",
      "https://www.facebook.com/truckinzy.technology"
    ]
  };

  // Add job posting structured data
  const jobPostingStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Logistics Manager",
    "description": "We are looking for an experienced Logistics Manager to oversee our supply chain operations.",
    "datePosted": "2025-01-15",
    "validThrough": "2025-03-15",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Truckinzy",
      "sameAs": "https://truckinzy.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 800000,
        "maxValue": 1200000,
        "unitText": "YEAR"
      }
    },
    "skills": "Supply Chain Management, Inventory Control, Team Leadership, Logistics Planning",
    "industry": "Logistics and Transportation"
  };

  // Simulate page view tracking for analytics
  useEffect(() => {
    // This would be replaced with actual analytics code
    console.log('Page view tracked');
    
    // Add page load time measurement
    const navigationStart = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationStart) {
      const pageLoadTime = navigationStart.loadEventEnd - navigationStart.startTime;
      console.log(`Page load time: ${pageLoadTime}ms`);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Truckinzy - End-to-End Logistics & Supply Chain Recruitment Platform</title>
        <meta name="description" content="Truckinzy is an end-to-end workforce recruitment platform specializing in logistics, transportation, and supply chain industry. We help businesses hire skilled professionals across all levels." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jobPostingStructuredData)}
        </script>
        
        {/* Additional SEO meta tags */}
        <link rel="canonical" href="https://truckinzy.com/" />
        <meta name="keywords" content="logistics recruitment, supply chain jobs, transportation hiring, warehouse executives, fleet managers, logistics workforce, supply chain specialists, India logistics, recruitment platform" />
      </Helmet>
      
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
    </>
  );
}

export default App;
