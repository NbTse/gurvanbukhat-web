import Banner from "components/common/banner";
import Feedback from "components/news/feedback";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Banner name="Холбоо барих" />

      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <section className="px-5 mx-auto lg:py-24 lg:px-24 contact">
            <div className="gap-[30px] grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
              <div className="flex flex-col  mb-8  p-[10px] items-center text-center">
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

              <div className="flex flex-col  mb-8  p-[10px] items-center text-center">
                <Image
                  src="/images/contact/2.png"
                  alt="contact-2"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />
                <p className="text-[#ffffffa3] text-[16px]">info@gb-group.mn</p>
              </div>
              <div className="flex flex-col  mb-8  p-[10px] items-center text-center">
                <Image
                  src="/images/contact/3.png"
                  alt="contact-3"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />
                <p className="text-[#ffffffa3] text-[16px]">7000-7000</p>
              </div>
              <div className="flex flex-col  mb-8  p-[10px] items-center text-center">
                <Image
                  src="/images/contact/4.png"
                  alt="contact-4"
                  width={85}
                  height={85}
                  className="mb-[20px]"
                />
                <p className="text-[#ffffffa3] text-[16px]">
                  https://gb-group.mn/
                </p>
              </div>
            </div>
          </section>

          <Feedback />
        </div>
      </div>
    </>
  );
}
