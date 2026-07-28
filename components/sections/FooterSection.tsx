import React from "react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-900 py-8 px-5 lg:px-15">
      <div className="max-w-150 md:max-w-250 lg:max-w-360 mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {currentYear} Sebastián Barría. Todos los derechos reservados.
        </div>

        {/* Right Side: Minimalist Social Links */}
        <div className="flex gap-6 text-sm font-medium tracking-wide">
          <a
            href="https://github.com/sebastianebd"
            className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-barr%C3%ADa-a29739183/"
            className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
