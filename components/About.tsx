import Link from "next/link";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const aboutData = [
  {
    icon: <FaAward className="text-primary text-2xl mb-4" />,
    title: "Experience",
    subtitle: "3+ Years Working",
  },
  {
    icon: <FiUsers className="text-primary text-2xl mb-4" />,
    title: "Clients",
    subtitle: "200+ Worldwide",
  },
  {
    icon: <VscFolderLibrary className="text-primary text-2xl mb-4" />,
    title: "Projects",
    subtitle: "80+ Completed",
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container mx-auto grid grid-cols-about gap-[15%]">
        <div className="grid place-items-center w-full aspect-square rounded-2 bg-about">
          <div className="rounded-2 overflow-hidden rotate-10 hover:rotate-0 default-transition">
            <img src="/assets/me-about.jpg" alt="about-image" />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6">
            {aboutData.map((data, i) => (
              <article
                key={i}
                className="bg-bgVariant border border-solid border-transparent rounded-2xl p-8 flex flex-col items-center justify-center transition duration-400 ease-in hover:about-card-hover"
              >
                {data.icon}
                <h5 className="text-sm mb-3">{data.title}</h5>
                <small className="text-xs text-light">{data.subtitle}</small>
              </article>
            ))}
          </div>

          <p className="mx-0 mt-8 mb-10 text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            nulla alias voluptatibus obcaecati incidunt laboriosam dicta odio
            assumenda consectetur commodi doloremque fugiat aperiam sed quae,
            atque sapiente iusto! Eos, facilis.
          </p>

          <Link href="/#contact">
            <a className="btn btn-primary hover:btn-hover">Let's Talk</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
