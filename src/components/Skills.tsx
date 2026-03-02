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

      // Trigger fade when section enters
      if (rect.top < windowHeight * 0.8) {
        setVisible(true);
      }

      // Horizontal scroll logic
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
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div
          style={{
            transform: `translateX(-${progress * 158}vw)`,
            transition: "transform 0.2s ease-out",
          }}
          className="flex gap-24 px-[24vw]"
        >
          {/* Card 1 */}
          <div
            className={`transition-all duration-1000 ease-out delay-100
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <GlassCard
              title="Web Development"
              description="Designing and building scalable full-stack applications using the MERN stack, with a strong focus on clean architecture, reusable components, optimized APIs, and smooth, responsive user experiences. I prioritize performance, maintainability, and real-world usability in every project."
              video="video3.mp4"
            />
          </div>

          {/* Card 2 */}
          <div
            className={`transition-all duration-1000 ease-out delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <GlassCard
              title="Data Structures & Algorithms"
              description="Strong foundation in data structures and algorithms, with a problem-solving mindset focused on writing efficient, optimized, and scalable code. Experienced in analyzing time and space complexity, breaking down complex logic, and implementing clean solutions to challenging computational problems."
              video="video.mp4"
            />
          </div>

          {/* Card 3 */}
          <div
            className={`transition-all duration-1000 ease-out delay-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <GlassCard
              title="Competitive Programming"
              description="Strong foundation in data structures and algorithms, with a problem-solving mindset focused on writing efficient, optimized, and scalable code. Experienced in analyzing time and space complexity, breaking down complex logic, and implementing clean solutions to challenging computational problems."
              video="video2.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;