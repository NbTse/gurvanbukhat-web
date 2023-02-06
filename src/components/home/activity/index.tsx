/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function Activity({}) {
  return (
    <section className="px-5 mx-auto activity">
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
      >
        <h2 className="text-center text-white lg:text-[56px] text-[20px] font-bold">
          ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
        </h2>
      </motion.div>

      <div className="hidden w-full md:block">
        <div className="grid grid-rows">
          <div className="relative mt-[-100px] flex items-center justify-start">
            <img src="/images/activity/1.png" alt="" />
            <div className="">
              <h2 className="text-white text-[28px] font-bold">
                Хөрөнгө оруулалт
              </h2>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.div
                  variants={{
                    hidden: {
                      x: "100vh",
                      opacity: 0,
                    },
                    show: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="list-disc text-start"
                >
                  <li className="text-white text-[18px]">
                    Барилга угсралтын төслийн хөрөнгө оруулалт
                  </li>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="relative mt-[-260px] flex items-center justify-end ">
            <div>
              <h2 className="text-white text-[28px] font-bold">
                Барилгын стратеги,менежмент
              </h2>

              <motion.div
                variants={{
                  hidden: {},
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.div
                  variants={{
                    hidden: {
                      x: "-100vh",
                      opacity: 0,
                    },
                    show: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="list-disc text-start"
                >
                  <li className="text-white text-[18px]">
                    Барилгын төслийн удирдлага
                  </li>

                  <li className="text-white text-[18px]">Менежмент </li>
                </motion.div>
              </motion.div>
            </div>

            <img src="/images/activity/4.png" alt="" />
          </div>

          <div className="relative mt-[-260px] flex items-center justify-start ">
            <img src="/images/activity/4.png" alt="" />
            <div>
              <p className="text-white text-[28px] text-start font-bold">
                Үйлдвэрлэл, үйлчилгээ
              </p>
              <motion.div
                variants={{
                  hidden: {},
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.div
                  variants={{
                    hidden: {
                      x: "100vh",
                      opacity: 0,
                    },
                    show: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="list-disc text-start"
                >
                  <li className="text-white text-[18px]">
                    Барилгын төслийн удирдлага
                  </li>
                  <li className="text-white text-[18px]">Дулаан хангамж </li>
                  <li className="text-white text-[18px]">
                    Агаар сэлгэлтийн тоног төхөөрөмжийн үйлдвэрлэл, угсралт
                  </li>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="relative mt-[-260px] flex items-center justify-end ">
            <div>
              <p className="text-white text-[28px] text-start font-bold">
                Худалдаа
              </p>

              <motion.div
                variants={{
                  hidden: {},
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.div
                  variants={{
                    hidden: {
                      x: "-100vh",
                      opacity: 0,
                    },
                    show: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="list-disc text-start"
                >
                  <li className="text-white text-[18px]">
                    Барилгын материалын импорт, худалдаа
                  </li>
                </motion.div>
              </motion.div>
            </div>

            <img src="/images/activity/4.png" alt="" />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile md:hidden">
        <div className="flex mt-[-60px] items-center justify-start">
          <div className="w-[100%]">
            <img src="/images/activity/1.png" alt="" />
          </div>
          <div>
            <h2 className="text-white lg:text-[28px] sm:text-[12px]">
              Хөрөнгө оруулалт
            </h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                variants={{
                  hidden: {
                    x: "100vh",
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="list-disc text-start"
              >
                <li className="text-white lg:text-[15px] sm:text-[14px]">
                  Барилга угсралтын төслийн хөрөнгө оруулалт
                </li>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="flex mt-[-100px] items-center justify-start ">
          <div className="w-[100%]">
            <img src="/images/activity/2.png" alt="" />
          </div>
          <div>
            <h2 className="text-white lg:text-[28px] sm:text-[12px] ">
              Барилгын стратеги,менежмент
            </h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                variants={{
                  hidden: {
                    x: "100vh",
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="list-disc text-start"
              >
                <li className="text-white lg:text-[15px] sm:text-[14px]">
                  Барилгын төслийн удирдлага
                </li>
                <li className="text-white lg:text-[15px] sm:text-[14px]">
                  Менежмент
                </li>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="flex mt-[-100px] items-center justify-start ">
          <div className="w-[100%]">
            <img src="/images/activity/3.png" alt="" />
          </div>
          <div>
            <h2 className="text-white lg:text-[28px] sm:text-[12px]">
              Үйлдвэрлэл, үйлчилгээ
            </h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                variants={{
                  hidden: {
                    x: "100vh",
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="list-disc text-start"
              >
                <li className="text-white lg:text-[15px] sm:text-[14px]">
                  Барилгын төслийн удирдлага
                </li>
                <li className="text-white lg:text-[15px] sm:text-[14px]">
                  Дулаан хангамж
                </li>
                <li className="text-white lg:text-[15px] sm:text-[14px]">
                  Агаар сэлгэлтийн тоног төхөөрөмжийн үйлдвэрлэл, угсралт
                </li>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="flex mt-[-100px] items-center justify-start ">
          <div className="w-[100%]">
            <img src="/images/activity/4.png" alt="" />
          </div>
          <div>
            <h2 className="text-white lg:text-[28px] sm:text-[12px]">
              Худалдаа
            </h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                variants={{
                  hidden: {
                    x: "100vh",
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="list-disc text-start"
              >
                <li className="text-white lg:text-[15px] sm:text-[14px] ">
                  Барилгын материалын импорт, худалдаа
                </li>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
