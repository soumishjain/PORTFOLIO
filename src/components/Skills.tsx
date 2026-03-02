import { useEffect, useRef, useState } from "react";
import GlassCard from "./GlassCard";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        setVisible(true);
      }

      const scrollProgress = -rect.top / windowHeight;
      const totalCards = 3;
      const maxShift = totalCards - 1;
      const clamped = Math.min(Math.max(scrollProgress, 0), maxShift - 0.5);

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div
            style={{
              transform: `translateX(-${progress * 145}vw)`,
              transition: "transform 0.2s ease-out",
            }}
            className="flex gap-16 px-[10vw]"
          >
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-1000 ease-out 
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {i === 0 && (
                  <GlassCard
                    title="Web Development"
                    description="Designing and building scalable full-stack applications using the MERN stack, with a strong focus on clean architecture, reusable components, optimized APIs, and smooth, responsive user experiences. I prioritize performance, maintainability, and real-world usability in every project."
                    video="video3.mp4"
                  />
                )}

                {i === 1 && (
                  <GlassCard
                    title="Data Structures & Algorithms"
                    description="Strong foundation in data structures and algorithms, with a problem-solving mindset focused on writing efficient, optimized, and scalable code. Experienced in analyzing time and space complexity, breaking down complex logic, and implementing clean solutions to challenging computational problems."
                    video="video.mp4"
                  />
                )}

                {i === 2 && (
                  <GlassCard
                    title="Competitive Programming"
                    description="Actively solving complex algorithmic problems to sharpen analytical thinking, speed, and precision under constraints. Regular practice has strengthened my ability to approach unfamiliar challenges strategically and implement high-performance solutions within limited time."
                    video="video2.mp4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col gap-16 px-6 py-20 md:hidden">
        <GlassCard
          title="Web Development"
          description="Designing and building scalable full-stack applications using the MERN stack, with a strong focus on clean architecture, reusable components, optimized APIs, and smooth, responsive user experiences. I prioritize performance, maintainability, and real-world usability in every project."
          video="video3.mp4"
        />

        <GlassCard
          title="Data Structures & Algorithms"
          description="Strong foundation in data structures and algorithms, with a problem-solving mindset focused on writing efficient, optimized, and scalable code."
          video="video.mp4"
        />

        <GlassCard
          title="Competitive Programming"
          description="Actively solving complex algorithmic problems to sharpen analytical thinking and implement high-performance solutions within limited time."
          video="video2.mp4"
        />
      </div>

    </section>
  );
};

export default Skills;