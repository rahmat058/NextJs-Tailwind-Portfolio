import Link from "next/link";

const CTA = () => {
  return (
    <div className="mt-10 flex justify-center gap-5">
      <Link href="/assets/cv.pdf" download>
        <a className="btn hover:btn-hover" target="_blank">
          Download CV
        </a>
      </Link>
      <Link href="/#contact">
        <a className="btn btn-primary hover:btn-hover">Let's Talk</a>
      </Link>
    </div>
  );
};

export default CTA;
