import Link from "next/link";

const portfolioData = [
  {
    id: 1,
    img: "/assets/portfolio1.jpg",
    title: "This is a portfolio item",
    github: "https://github.com/",
    demoUrl: "http://www.demoUrl.com",
  },
  {
    id: 2,
    img: "/assets/portfolio2.jpg",
    title: "This is a portfolio item",
    github: "https://github.com/",
    demoUrl: "http://www.demoUrl.com",
  },
  {
    id: 3,
    img: "/assets/portfolio3.jpg",
    title: "This is a portfolio item",
    github: "https://github.com/",
    demoUrl: "http://www.demoUrl.com",
  },
  {
    id: 4,
    img: "/assets/portfolio4.jpg",
    title: "This is a portfolio item",
    github: "https://github.com/",
    demoUrl: "http://www.demoUrl.com",
  },
  {
    id: 5,
    img: "/assets/portfolio5.png",
    title: "This is a portfolio item",
    github: "https://github.com/",
    demoUrl: "http://www.demoUrl.com",
  },
  {
    id: 6,
    img: "/assets/portfolio6.jpg",
    title: "This is a portfolio item",
    github: "https://github.com/",
    demoUrl: "http://www.demoUrl.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container mx-auto grid grid-cols-3 gap-10">
        {portfolioData.map(({ id, img, title, github, demoUrl }) => (
          <article
            key={id}
            className="bg-bgVariant p-5 rounded-2 border border-solid border-transparent default-transition hover:portfolio-hover"
          >
            <div className="rounded-3xl overflow-hidden">
              <img src={img} alt={`portfolio-${id}`} />
            </div>
            <h3 className="mx-0 mt-5 mb-8">{title}</h3>

            <div className="flex gap-4 mb-4">
              <Link href={github}>
                <a className="btn">Github</a>
              </Link>
              <Link href={demoUrl}>
                <a className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
