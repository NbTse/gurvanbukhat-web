/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Image from "next/image";

export default function Project({}) {
  return (
    <>
      <section>
        <h2 className="mb-[70px] text-center text-white lg:text-[56px] text-[20px] font-bold">
          ТӨСЛҮҮД
        </h2>

        <div className="px-5 py-24 mx-auto lg:px-24 project h-screen w-full rounded-lg bg-[url('/images/projects/bg.png')] bg-cover">
          <motion.div
            className="flex flex-col w-full my-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.div>
          <div className="flex">
            <div>
              <a href="">
                <img
                  src="/images/projects/proj/AB.png"
                  alt="AB"
                  className="w-full"
                />
              </a>
            </div>
            <div>
              <a href="">
                <img src="/images/projects/proj/Florence.png" alt="Florence" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="/images/projects/proj/LUX.png" alt="LUX" />
              </a>
            </div>
            <div>
              <a href="">
                <img
                  src="/images/projects/proj/Plus apart.png"
                  alt="Plus apart"
                />
              </a>
            </div>
            <div>
              <a href="">
                <img src="/images/projects/proj/PLUS RES.png" alt="PLUS RES" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
