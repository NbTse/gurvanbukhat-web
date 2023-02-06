import Link from "next/link";

export default function MobileMenu() {
  return (
    <>
      <div id="mobile-menu" className="menu">
        <ul className="mobileNav">
          <li>
            <Link href="/about" passHref>
              Ерөнхий захирлын мэндчилгээ
            </Link>
          </li>
          <li>
            <Link href="/company-introduction" passHref>
              Компанийн танилцуулга
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              Төслүүд
            </Link>
          </li>
          <li>
            <Link href="/news" passHref>
              Судалгаа,Мэдээлэл
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
