import { BsPatchCheckFill } from "react-icons/bs";

const experienceForntEndData = [
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "HTML",
    subtitle: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "CSS",
    subtitle: "Intermediate",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "JavaScript",
    subtitle: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "BootStrap",
    subtitle: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "Tailwind",
    subtitle: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "React",
    subtitle: "Intermediate",
  },
];
const experienceBackEndData = [
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "Node Js",
    subtitle: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "Mongo DB",
    subtitle: "Intermediate",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "PHP",
    subtitle: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "MySQL",
    subtitle: "Basic",
  },
  {
    icon: <BsPatchCheckFill className="mt-[6px] text-primary" />,
    title: "Firebase",
    subtitle: "Experienced",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container mx-auto grid grid-cols-2 gap-8 [&>div]:experience-content-card hover:[&>div]:experience-content-card-hover [&>div>h3]:experience-content-header">
        <div>
          <h3>Frontend Development</h3>
          <div className="grid grid-cols-2 gap-y-8">
            {experienceForntEndData.map((data, i) => (
              <article key={i} className="flex flex-row gap-4">
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">{data.subtitle}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3>Backend Development</h3>
          <div className="grid grid-cols-2 gap-y-8">
            {experienceBackEndData.map((data, i) => (
              <article key={i} className="flex flex-row gap-4">
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">{data.subtitle}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
