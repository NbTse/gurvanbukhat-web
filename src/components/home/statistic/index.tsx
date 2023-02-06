/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function Statistic({}) {
  return (
    <>
      <div className="lg:hidden bg-cover bg-no-repeat  bg-[url('/images/statistic/2.png')]">
        <section className="px-5 mx-auto lg:py-24 lg:px-24 statistic">
          <motion.div
            className="flex flex-col w-full text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="mb-[70px] text-center text-white lg:text-[56px] text-[20px] font-bold">
              ТООН СТАТИСТИК
            </h2>

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 ">
              <div className="mb-[50px]">
                <p className="text-stroke">170+</p>
                <p className="text-white text-[16px]">Нийт ажилтны тоо</p>
              </div>
              <div className="mb-[50px]">
                <p className="text-stroke">5+</p>
                <p className="text-white text-[16px]">Хэрэгжүүлж буй төслүүд</p>
              </div>
              <div className="mb-[50px]">
                <p className="text-stroke">100K+</p>
                <p className="text-white text-[16px]">
                  Ашиглалтанд оруулсан мкв
                </p>
              </div>
              <div className="mb-[50px]">
                <p className="text-stroke">9+</p>
                <p className="text-white text-[16px]">Салбар компаниуд</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <section className="hidden px-5 mx-auto lg:block lg:px-24 statistic">
        <motion.div
          className="flex flex-col w-full mb-10 text-center z-max "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="mb-[70px] text-center text-white lg:text-[56px] text-[35px]">
            ТООН СТАТИСТИК
          </h2>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 ">
            <div className="mb-[50px]">
              <p className="text-stroke">170+</p>
              <p className="text-white text-[16px]">Нийт ажилтны тоо</p>
            </div>
            <div className="mb-[50px]">
              <p className="text-stroke">5+</p>
              <p className="text-white text-[16px]">Хэрэгжүүлж буй төслүүд</p>
            </div>
            <div className="mb-[50px]">
              <p className="text-stroke">100K+</p>
              <p className="text-white text-[16px]">Ашиглалтанд оруулсан мкв</p>
            </div>
            <div className="mb-[50px]">
              <p className="text-stroke">9+</p>
              <p className="text-white text-[16px]">Салбар компаниуд</p>
            </div>
          </div>
        </motion.div>
      </section>
      <img
        className="hidden lg:block w-full bg-no-repeat bg-cover lg:mt-[-90px]"
        src="/images/statistic/1.png"
        alt="statistic"
      ></img>
    </>
  );
}
