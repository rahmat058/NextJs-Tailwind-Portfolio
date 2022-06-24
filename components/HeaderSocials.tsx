import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="flex flex-col items-center gap-3 absolute left-0 bottom-12 after:content-[''] after:after-headersocials">
      <Link href="https://linkedin.com/">
        <a target="_blank">
          <BsLinkedin />
        </a>
      </Link>
      <Link href="https://github.com/">
        <a target="_blank">
          <FaGithub />
        </a>
      </Link>
      <Link href="https://facebook.com/">
        <a target="_blank">
          <FaFacebook />
        </a>
      </Link>
    </div>
  );
};

export default HeaderSocials;
