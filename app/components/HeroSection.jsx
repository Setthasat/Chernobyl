import { MapPin, Clock, Radiation } from "lucide-react";
import Hero from '../../public/Hero.png';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Hero.src}
          alt="Chernobyl Nuclear Power Plant silhouette with cooling towers and transmission lines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <Radiation className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Chernobyl
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-300 leading-relaxed">
          The story of the world's worst nuclear disaster and its lasting impact
          on humanity
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center text-sm md:text-base text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            Pripyat, Ukraine
          </div>
          <div className="flex items-center text-sm md:text-base text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            April 26, 1986
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
