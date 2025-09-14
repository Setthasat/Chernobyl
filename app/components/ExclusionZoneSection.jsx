import Exclusion from "../../public/Exclusion.png";
import { Radiation, MapPin, Trees, Clock } from "lucide-react";

const ExclusionZoneSection = () => {
  const keyFacts = [
    {
      icon: Radiation,
      text: "30-kilometer radius around the plant",
    },
    {
      icon: MapPin,
      text: "Pripyat remains a ghost town",
    },
    {
      icon: Trees,
      text: "Wildlife has returned to inhabited areas",
    },
    {
      icon: Clock,
      text: "Will remain dangerous for thousands of years",
    },
  ];

  return (
    <section id="exclusion-zone" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Exclusion Zone Today
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              The Chernobyl Exclusion Zone remains one of the most radioactive
              places on Earth. Despite this, nature has reclaimed much of the
              abandoned area, creating a unique ecosystem.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-400">
                Key Facts
              </h3>
              <div className="space-y-2">
                {keyFacts.map((fact, index) => {
                  const IconComponent = fact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <p className="text-gray-300">{fact.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={Exclusion.src}
              alt="Overgrown nature in Chernobyl exclusion zone with abandoned buildings"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusionZoneSection;
