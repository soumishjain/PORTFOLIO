import { useEffect, useRef, useState } from "react";

const ProjectCard = ({
  title,
  description,
  bg,
}: {
  title: string;
  description: string;
  bg: string;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div
      className={`w-[80%] h-[80vh] rounded-3xl ${bg}
      shadow-2xl p-16 flex flex-col justify-center`}
    >
      <div
        ref={contentRef}
        className={`space-y-8 transition-all duration-1000 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-lg text-white/90 max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;