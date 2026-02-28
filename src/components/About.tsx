import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b bg-neutral-900 text-white px-16 py-32 overflow-hidden"
    >
      {/* Big Background Text */}
     <h1
  className={`absolute text-[18vw] max-md:text-[22vw] font-extrabold top-20 left-10 select-none ${
    visible ? "text-gradient-fill active" : "text-gradient-fill"
  }`}
>
  ABOUT
</h1>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Heading */}
          <div
            className={`transition-all max-md:mt-30 mt-50 duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Engineering ideas
              <br />
              into scalable
              <br />
              digital products.
            </h2>

            <div className="w-20 h-1 bg-white mt-8 transition-all duration-700 delay-300"></div>
          </div>

          {/* Right Content */}
          <div
            className={`space-y-8 text-lg text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p>
              I build web applications that are clean, efficient, and structured
              with intent. From backend architecture to immersive frontends,
              I focus on clarity and performance.
            </p>

            <p>
              Competitive programming sharpened my problem-solving mindset
              helping me think structurally and write optimized code.
            </p>

            <p className="italic text-white">
              Growth over comfort. Always.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;