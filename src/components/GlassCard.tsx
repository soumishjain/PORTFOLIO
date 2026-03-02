import { useRef } from "react";

const GlassCard = ({
  title,
  description,
  video,
}: {
  title: string;
  description: string;
  video: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 30;
    const rotateY = (x - centerX) / 60;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="w-screen flex items-center justify-center">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[80%] h-[70vh] rounded-3xl overflow-hidden
          border border-white/20
          shadow-[0_0_40px_rgba(255,255,255,0.1)]
          transition-transform duration-300 ease-out"
      >
        {/* Background Video */}
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute rounded-2xl inset-0 w-full h-full object-cover"
        />

        {/* Dark + Glass Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl"></div>

        {/* Content */}
        <div className="relative z-10 h-full justify-center flex items-center flex-col py-16 px-16">
          <h2 className="text-5xl text-center max-md:text-3xl font-bold text-white">
            {title}
          </h2>

          <p className="text-xl max-md:text-sm text-center text-gray-300 max-w-2xl leading-relaxed mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;