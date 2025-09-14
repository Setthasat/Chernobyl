import { Heart, MapPin, Users, Shield, Trees } from 'lucide-react';

const ImpactSection = () => {
  const impactData = [
    {
      icon: Heart,
      color: "text-red-500",
      title: "Immediate Deaths",
      titleColor: "text-red-400",
      description: "Plant staff and first responders died from radiation exposure and explosion casualties"
    },
    {
      icon: MapPin,
      color: "text-orange-500", 
      title: "Global Contamination",
      titleColor: "text-orange-400",
      description: "Radioactive material spread across Ukraine, Belarus, and throughout Europe"
    },
    {
      icon: Users,
      color: "text-yellow-500",
      title: "Mass Evacuation", 
      titleColor: "text-yellow-400",
      description: "Over 300,000 people were evacuated and permanently resettled"
    },
    {
      icon: Heart,
      color: "text-purple-500",
      title: "Health Effects",
      titleColor: "text-purple-400", 
      description: "Long-term health issues including increased cancer rates and genetic effects"
    },
    {
      icon: Shield,
      color: "text-blue-500",
      title: "Exclusion Zone",
      titleColor: "text-blue-400",
      description: "30-kilometer zone remains largely uninhabitable to this day"
    },
    {
      icon: Trees,
      color: "text-green-500",
      title: "Genetic Impact",
      titleColor: "text-green-400",
      description: "Ongoing studies continue to reveal long-term genetic and environmental effects"
    }
  ];

  return (
    <section id="impact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Impact</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                <IconComponent className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                <h3 className={`text-xl font-semibold mb-3 ${item.titleColor}`}>{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;