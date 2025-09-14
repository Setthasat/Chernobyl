
const TimelineSection = () => {
  const timelineData = [
    {
      year: "1986",
      event: "Reactor 4 explosion, initial fire, and emergency cleanup"
    },
    {
      year: "1986–1990s", 
      event: "Mass evacuations, containment sarcophagus built, decontamination efforts"
    },
    {
      year: "2016",
      event: "New Safe Confinement structure completed over Reactor 4"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Timeline</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-yellow-400"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 md:space-x-0">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                </div>
                <div className={`bg-gray-800 rounded-lg p-6 md:w-96 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.year}</h3>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;