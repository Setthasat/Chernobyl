import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhatHappenedSection from './components/WhatHappenedSection';
import TimelineSection from './components/TimelineSection';
import ImpactSection from './components/ImpactSection';
import ExclusionZoneSection from './components/ExclusionZoneSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <WhatHappenedSection />
      <TimelineSection />
      <ImpactSection />
      <ExclusionZoneSection />
      <Footer />
    </div>
  );
};

export default Home;