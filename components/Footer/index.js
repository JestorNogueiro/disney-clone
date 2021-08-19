import Link from "next/link";
function Footer() {
  return (
    <section className="h-16 border-white/60 px-8 py-2.5 border-t-2 rounded">
      <h3 className="">Design & Developed by @jestor nogueiro</h3>
      <div className="flex flex-row space-x-2.5">
        <ul className="list-none mt-2">
          Social Media
          <li className="px-4">
            <Link href="https://www.facebook.com/jestor.nogueiro/">
              <a target="_blank">facebook</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://www.instagram.com/jestor_nogueiro/">
              <a target="_blank">Insta</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/">
              <a target="_blank">linkedIn</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://github.com/JestorNogueiro">
              <a target="_blank">Github</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
