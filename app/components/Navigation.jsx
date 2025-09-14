import { Radiation } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Radiation className="w-6 h-6 text-yellow-400" />
          <span className="text-xl font-bold">Chernobyl</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#what-happened" className="hover:text-yellow-400 transition-colors">What Happened</a>
          <a href="#timeline" className="hover:text-yellow-400 transition-colors">Timeline</a>
          <a href="#impact" className="hover:text-yellow-400 transition-colors">Impact</a>
          <a href="#exclusion-zone" className="hover:text-yellow-400 transition-colors">Exclusion Zone</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
