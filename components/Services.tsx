import { BiCheck } from "react-icons/bi";

const serviceData = [
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BiCheck className="text-primary mt-[2px]" />,
    service: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container mx-auto grid grid-cols-3 gap-12">
        <article className="bg-bgVariant rounded-b-[2rem] border border-solid border-primary h-fit default-transition hover:service-hover">
          <div className="bg-primary p-8 rounded-b-[2rem] shadow-boxShadow">
            <h3 className="text-bg text-base text-center">UI/UX Design</h3>
          </div>

          <ul className="p-8">
            {serviceData.map((data, i) => (
              <li key={i} className="flex gap-4 mb-3">
                {data.icon}
                <p className="text-sm">{data.service}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-bgVariant rounded-b-[2rem] border border-solid border-primary h-fit default-transition hover:service-hover">
          <div className="bg-primary p-8 rounded-b-[2rem] shadow-boxShadow">
            <h3 className="text-bg text-base text-center">Web Development</h3>
          </div>

          <ul className="p-8">
            {serviceData.map((data, i) => (
              <li key={i} className="flex gap-4 mb-3">
                {data.icon}
                <p className="text-sm">{data.service}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-bgVariant rounded-b-[2rem] border border-solid border-primary h-fit default-transition hover:service-hover">
          <div className="bg-primary p-8 rounded-b-[2rem] shadow-boxShadow">
            <h3 className="text-bg text-base text-center">Content Creation</h3>
          </div>

          <ul className="p-8">
            {serviceData.map((data, i) => (
              <li key={i} className="flex gap-4 mb-3">
                {data.icon}
                <p className="text-sm">{data.service}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
