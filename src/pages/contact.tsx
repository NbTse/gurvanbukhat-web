import Banner from "components/common/banner";
import Feedback from "components/news/feedback";
import Image from "next/image";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("components/common/location"), {
  ssr: false,
});

export default function Contact() {
  return (
    <>
      <Banner name="Холбоо барих" />

      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <section className="px-5 mx-auto lg:py-24 lg:px-24 contact">
            <div className="gap-[30px] grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/contact/1.png"
                  alt="contact-1"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />

                <p className="text-[#ffffffa3] text-[16px]">
                  Баянзүрх дүүрэг, 25-р хороо, PLUS Residence, PLUS center - 2
                  давхар
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/contact/2.png"
                  alt="contact-2"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />
                <p className="text-[#ffffffa3] text-[16px]">
                  <a href="mailto:info@gb-group.mn">info@gb-group.mn</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/contact/3.png"
                  alt="contact-3"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />
                <p className="text-[#ffffffa3] text-[16px]">
                  <a href="tel://70007000">7000-7000</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/contact/4.png"
                  alt="contact-4"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />
                <p className="text-[#ffffffa3] text-[16px]">
                  <a
                    href="https://gb-group.mn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://gb-group.mn
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-10 p-5 md:flex-row md:p-10">
          <div className="w-full md:w-1/2">
            <Feedback />
          </div>

          <div className="w-full md:w-1/2">
            <MapWithNoSSR />
          </div>
        </div>
      </div>
    </>
  );
}
