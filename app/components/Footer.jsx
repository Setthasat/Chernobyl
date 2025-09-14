import { Radiation, Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-black flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <div className="flex gap-2">
        <a
          href="https://github.com/Setthasat"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mx-2 gap-2 rounded-full text-yellow-500 hover:text-black hover:bg-yellow-500 transition-colors flex items-center justify-center"
        >
          <Github />
          <p>Github</p>
        </a>
        <a
          href="https://safehub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mx-2  gap-2 rounded-full text-yellow-500 hover:text-black hover:bg-yellow-500 transition-colors flex items-center justify-center"
        >
          <Globe />
          <p>SafeHub</p>
        </a>
      </div>

      <p className="text-sm text-gray-500">
        A historical documentation of the Chernobyl nuclear disaster
      </p>
    </footer>
  );
};

export default Footer;
