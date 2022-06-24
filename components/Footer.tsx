import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <Link href="/">
        <a className="text-[2rem] font-medium mb-8 block">John Smith</a>
      </Link>

      <ul className="flex flex-wrap justify-center gap-8 mx-auto mt-0 mb-12">
        <li>
          <Link href="/#">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#experience">
            <a>Experience</a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/#portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/#testimonials">
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16">
        <Link href="https://facebook.com/">
          <a className="footer-socials hover:footer-socials-hover">
            <FaFacebook />
          </a>
        </Link>
        <Link href="https://instragram.com/">
          <a className="footer-socials hover:footer-socials-hover">
            <FiInstagram />
          </a>
        </Link>
        <Link href="https://twitter.com/">
          <a className="footer-socials hover:footer-socials-hover">
            <IoLogoTwitter />
          </a>
        </Link>
      </div>

      <div className="mb-16 text-bg">
        <small>&copy; John Smith. All Rights Reserved</small>
      </div> 
    </footer>
  );
};

export default Footer;
