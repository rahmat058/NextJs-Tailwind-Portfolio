import { useRef } from "react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const contactOptionsData = [
  {
    id: 1,
    name: "Email",
    contact: "md.kazi.rahmat@gmail.com",
    icon: <MdOutlineEmail className="text-2xl mb-2" />,
    contactMessage: "Send a Message",
    contactUrl: "mailto:md.kazi.rahmat@gmail.com",
  },
  {
    id: 2,
    name: "Messenger",
    contact: "kazirahmat",
    icon: <RiMessengerLine className="text-2xl mb-2" />,
    contactMessage: "Send a Message",
    contactUrl: "https://m.me/md.k.rahmat",
  },
  {
    id: 3,
    name: "WhatsApp",
    contact: "+8801753362960",
    icon: <BsWhatsapp className="text-2xl mb-2" />,
    contactMessage: "Send a Message",
    contactUrl: "https://web.whatsapp.com/send?phone=+8801753362960",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6xythe",
        "template_reht83p",
        e.currentTarget,
        "nkFZX1UcLzFFrs_9c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container mx-auto w-[58%] grid grid-cols-contact gap-[12%]">
        <div className="flex flex-col gap-5">
          {contactOptionsData.map(
            ({ id, name, contact, icon, contactMessage, contactUrl }) => (
              <article
                key={id}
                className="bg-bgVariant p-5 rounded-[1.2rem] text-center border border-solid border-transparent default-transition flex flex-col items-center hover:contact-hover"
              >
                {icon}
                <h4>{name}</h4>
                <h5>{contact}</h5>
                <Link href={contactUrl} passHref={true}>
                  <a
                    target="_blank"
                    className="mt-3 inline-block text-sm text-primary hover:text-primary"
                  >
                    {contactMessage}
                  </a>
                </Link>
              </article>
            )
          )}
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
            className="form-input"
          />

          <button type="submit" className="btn btn-primary hover:btn-hover">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
