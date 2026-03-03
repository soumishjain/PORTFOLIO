import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative backdrop-blur-3xl max-md:flex-col max-md:gap-10 flex items-center md:items-end py-15 px-8 overflow-hidden h-screen"
    >
      {/* Heading */}
      <h1
        className={`text-[18vw] text-white font-extrabold leading-[0.8]
        transition-all duration-1000 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        Let's Connect.
      </h1>

      {/* Social Icons */}
      <div className="flex gap-4 text-white md:absolute top-5 right-5">
        <a target="_blank" href="https://www.linkedin.com/in/soumis-jain/">
          <img className="aspect-square w-10 rounded-full border border-white" src="https://images.icon-icons.com/652/PNG/512/linkedin_icon-icons.com_59873.png" alt="" />
        </a>

        <a target="_blank" href="https://github.com/soumishjain">
          <img className="aspect-square w-10 rounded-full border border-white" src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png" alt="" />
        </a>

        <a target="_blank" href="https://leetcode.com/u/soumisjain/">
          <img className="aspect-square w-10 rounded-full border border-white" src="https://miro.medium.com/0*xJCLQQRZv3XFMUd1" alt="" />
        </a>

        <a target="_blank" href="https://www.codechef.com/users/soumisjain">
          <img className="aspect-square w-10 rounded-full border border-white" src="https://media.licdn.com/dms/image/v2/D4D03AQEnLKj7oZ_KNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698941114071?e=2147483647&v=beta&t=YtRmVsYl23NE2c1c66KsNg-WumeaCaDvBlJu1MvGGXY" alt="" />
        </a>

        <a target="_blank" href="https://www.instagram.com/sammz_heree/?hl=en">
          <img className="aspect-square w-10 rounded-full border border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2luaeMi_9K0EjSW8klWkt2rlHGYXUESiAw&s" alt="" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;