import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({}) {
  return (
    <>
      <section
        className="hero"
        // style={{
        //   backgroundImage: `url(/images/background1.png)`,
        // }}
      >
        <div className="hidden mx-auto lg:block max-w-8xl">
          <motion.div
            className="items-center justify-between inline-block p-5 pt-0 mx-auto max-w-8xl lg:flex lg:flex-wrap "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="lg:w-1/2 ">
              <h2 className="max-w-xl lg:text-[4.2em] text-[32px] font-bold leading-none text-white inline-block">
                Өндөр чанарыг Бодит үнээр
              </h2>

              <p className="max-w-2xl mt-6 text-[16px] text-[#ffffffa3]">
                “Гурван Бухат Групп” ХХК нь салбартаа 13 жилийн туршлагатай
                Үндэсний бүтээн байгуулагч групп компани юм.
              </p>
            </div>
            <div className="flex-col hidden w-full mb-20 mt-44 lg:mt-12 lg:inline-block lg:w-1/2">
              <Image
                src="/videos/NEW-LOGO-alpha.gif"
                alt="bg"
                width={540}
                height={540}
                className="float-right bg-cover "
              />
            </div>
            <div className="flex justify-center w-full my-20 lg:mt-0 lg:hidden lg:w-2/5">
              <Image
                src="/videos/NEW-LOGO-alpha.gif"
                alt="bg"
                width={300}
                height={220}
              />
            </div>
          </motion.div>
        </div>
        {/* mobile */}
        <div className="mx-auto lg:hidden max-w-8xl">
          <motion.div
            className="items-center justify-between inline-block p-5 pt-0 mx-auto max-w-8xl lg:flex lg:flex-wrap "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex-col hidden w-full mb-20 mt-44 lg:mt-12 lg:inline-block lg:w-1/2">
              <Image
                src="/videos/NEW-LOGO-alpha.gif"
                alt="bg"
                width={540}
                height={540}
                className=" lg:mx-[100px] lg:mr-0 h-[548px] w-[540px]"
              />
            </div>
            <div className="flex justify-center w-full my-5 lg:mt-0 lg:hidden lg:w-2/5">
              <Image
                src="/videos/NEW-LOGO-alpha.gif"
                alt="bg"
                width={300}
                height={220}
              />
            </div>
            <div className="lg:w-1/2 ">
              <h2 className="max-w-xl lg:text-[4.2em] text-[32px] font-bold leading-none text-white inline-block">
                Өндөр чанарыг Бодит үнээр
              </h2>

              <p className="max-w-2xl mt-6 text-[16px] text-[#ffffffa3]">
                “Гурван Бухат Групп” ХХК нь салбартаа 13 жилийн туршлагатай
                Үндэсний бүтээн байгуулагч групп компани юм.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
