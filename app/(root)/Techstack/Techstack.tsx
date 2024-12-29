import React from "react";

const techStackData = [
  { src: "/nextjs.svg", alt: "Next.js", name: "Next.js" },
  { src: "/typescript.svg", alt: "TypeScript", name: "TypeScript" },
  { src: "/react.svg", alt: "React", name: "React" },
  { src: "/tailwindcss.svg", alt: "TailwindCSS", name: "TailwindCSS" },
  { src: "/javascript.svg", alt: "JavaScript", name: "JavaScript" },
  { src: "/css.svg", alt: "CSS", name: "CSS" },
  { src: "/shadcn.svg", alt: "Shadcn", name: "Shadcn" },
  { src: "/figma.svg", alt: "Figma", name: "Figma" },
];

const Techstack = () => {
  return (
    <div className="max-w-[900px] mx-auto my-12 p-6 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center lg:text-left">
        Tech Stack
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techStackData.map((tech) => (
          <div
            key={tech.alt}
            className="flex items-center border rounded-xl shadow-inner bg-[rgb(13,13,13)] p-2 sm:p-4"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              width={46}
              height={46}
              className="mr-2"
            />
            <p className="text-base sm:text-lg lg:text-xl">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
