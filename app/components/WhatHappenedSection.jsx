import What from  "../../public/What.png";

const WhatHappenedSection = () => {
  return (
    <section id="what-happened" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Happened</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              On April 26, 1986, Reactor No. 4 exploded during a late-night safety test, releasing massive amounts of radioactive material into the atmosphere — one of the worst nuclear accidents in history.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">The Sequence of Events</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Engineers performed a low-power turbine safety test</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Safety systems were deliberately turned off</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">A sudden power surge caused overheating and steam explosions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">The reactor roof blew off, releasing radioactive materials</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={What.src}
              alt="Chernobyl nuclear explosion aftermath with glowing reactor"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappenedSection;
