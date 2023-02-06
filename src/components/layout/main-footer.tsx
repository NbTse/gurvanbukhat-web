/* eslint-disable @next/next/no-img-element */
import CustomButton from "components/common/custom-button";
import CustomInput from "components/common/custom-input";
import Logo from "components/common/logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-screen  bg-[url('/images/footer/bg-light.png')] bg-cover bg-no-repeat bg-left-bottom">
      <div className="mx-auto px-4 sm:px-6 text-center bg-[#ffffff14] border border-[#ffffff14]">
        <div className="py-[60px] md:py-[60px]">
          <h2 className="text-white lg:text-[28px] text-[14px] mb-[30px]">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>

          <CustomInput
            placeholder="Enter your email"
            name="email"
            type="email"
          />

          <CustomButton name="Subscribe" type="subscribe" />
        </div>
      </div>

      <div className="px-5 pt-24 mx-auto text-black max-w-8xl">
        <div className="flex flex-wrap order-first text-left">
          <div className="w-full px-4 md:w-2/3 lg:w-1/3">
            <h2 className="mb-3 text-lg tracking-widest text-white text-[14px]  ">
              БИДНИЙ ТУХАЙ
            </h2>
            <nav className="py-3 space-y-2 text-[#ffffffa3] list-none text-[14px]">
              <li>
                <Link
                  href="/about"
                  passHref
                  className=" md:hover:text-blue-700"
                >
                  Ерөнхий захирлын мэндчилгээ
                </Link>
              </li>
              <li>
                <Link
                  href="/company-introduction"
                  passHref
                  className=" md:hover:text-blue-700"
                >
                  Компанийн танилцуулга
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/3 lg:w-1/3">
            <Link href="/projects" passHref>
              <h2 className="mb-3 text-lg tracking-widest text-white text-[14px]  md:hover:text-blue-700">
                ТӨСЛҮҮД
              </h2>
            </Link>
            <nav className="py-3 mb-10 space-y-2 text-[#ffffffa3] list-none text-[14px] ">
              <li className=" md:hover:text-blue-700">
                <Link href="/project-detail/?projectId=1" passHref>
                  Арга билиг цогцолбор хотхон
                </Link>
              </li>
              <li className=" md:hover:text-blue-700">
                <Link href="/project-detail/?projectId=2" passHref>
                  Даланзадгад апартмент 2
                </Link>
              </li>
              <li className=" md:hover:text-blue-700">
                <Link href="/project-detail/?projectId=3" passHref>
                  Lux 16 апартмент
                </Link>
              </li>
              <li className=" md:hover:text-blue-700">
                <Link href="/project-detail/?projectId=4" passHref>
                  Адмирал апартмент
                </Link>
              </li>
              <li className=" md:hover:text-blue-700">
                <Link href="/project-detail/?projectId=5" passHref>
                  Plus residence
                </Link>
              </li>
              <li className=" md:hover:text-blue-700">
                <Link href="/project-detail/?projectId=6" passHref>
                  Plus apartment
                </Link>
              </li>
            </nav>
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-1/3">
            <Link href="/contact" passHref>
              <h2 className="mb-3 text-lg tracking-widest text-white text-[14px]  md:hover:text-blue-700">
                ХОЛБОО БАРИХ
              </h2>
            </Link>
            <nav className="py-3 mb-10 space-y-2 list-none text-[14px] text-white  md:hover:text-blue-700">
              <li>
                <Link href="/questions" passHref>
                  ТҮГЭЭМЭЛ АСУУЛТ ХАРИУЛТ
                </Link>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-4 bg-top border-t  border-[#6E7191] lg:flex-row sm:flex-row">
          <ul className="flex flex-col">
            <Logo />
          </ul>
          <div className="flex gap-2">
            <a href="#" target="_blank">
              <Image
                src="/images/footer/1.png"
                width={48}
                height={48}
                alt=""
                className="w-[48px] h-[48px]"
              />
            </a>
            <a href="#" target="_blank">
              <Image
                src="/images/footer/2.png"
                width={48}
                height={48}
                alt=""
                className="w-[48px] h-[48px]"
              />
            </a>
            <a href="#" target="_blank">
              <Image
                src="/images/footer/3.png"
                width={48}
                height={48}
                alt=""
                className="w-[48px] h-[48px]"
              />
            </a>
            <a href="#" target="_blank">
              <Image
                src="/images/footer/4.png"
                width={48}
                height={48}
                alt=""
                className="w-[48px] h-[48px]"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src="/images/footer/bg.png"
        alt="footer"
        className="hidden float-right lg:block"
      />
      <img
        src="/images/footer/mobile-bg.png "
        alt="footer"
        className="float-right sm:block md:block lg:hidden xl:hidden 2xl:hidden"
      />
    </footer>
  );
}
