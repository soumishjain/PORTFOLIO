import Typewriter from "./Typewriter";

const HeroPage = () => {
  return (
    <div
      className="sticky w-full top-0 h-screen overflow-hidden bg-cover bg-top flex items-center bg-black">
        <div className="absolute top-6 left-6 text-white">
        <Typewriter />
        </div>
        <img className="absolute bottom-0 max-md:left-5 left-135 max-md:h-130 h-180" src="https://res.cloudinary.com/mashucloud/image/upload/v1772286880/image_for_portfolio-removebg-preview_pdxcnj.png" alt="" />
      <h1 className="text-[15vw] uppercase font-extrabold text-white mix-blend-difference whitespace-nowrap animate-slideX tracking-tight">
        Soumis Jain
      </h1>
      
    </div>
  );
};

export default HeroPage 