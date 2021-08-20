import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="pt-2  text-center border-white/60  border-t-2 rounded mb-4  ">
      <span className="text-white/60 ">Developed by </span>
      <span className="font-bold tracking-widest border-b ">
        @ jestor nogueiro
      </span>

      <div className=" mt-3 mb-4">
        <ul className="list-none  flex items-center justify-center">
          <li className="px-4 hover:scale-100">
            <Link href="https://www.facebook.com/jestor.nogueiro/">
              <a target="_blank">
                <FaFacebook className="text-2xl hover:scale-100" />
              </a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://www.instagram.com/jestor_nogueiro/">
              <a target="_blank">
                <FaInstagram className="text-2xl" />
              </a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/">
              <a target="_blank">
                <FaLinkedin className="text-2xl" />
              </a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://github.com/JestorNogueiro">
              <a target="_blank">
                <FaGithub className="text-2xl" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
