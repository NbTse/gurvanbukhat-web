/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";

export default function Project({}) {
  return (
    <>
      <section className="px-5 mx-auto lg:py-24 lg:px-24 statistic">
        <h2 className="mb-[70px] text-center text-white lg:text-[56px] text-[20px] font-bold">
          ТӨСЛҮҮД
        </h2>

        <div className="project flex h-[100vh] w-full rounded-lg bg-[url('/images/projects/bg1.png')] bg-cover">
          <div className="relative m-auto">
            <img src="/images/projects/boxes.png" className="w-[100%]"></img>
            {/* <motion.div
              className="flex flex-col w-full my-10 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            ></motion.div> */}
            <div className="absolute bottom-0">
              <div className="flex flex-row">
                <div>
                  <Link href="/project-detail/?projectId=3">
                    <img
                      src="/images/projects/proj/LUX.png"
                      alt="LUX"
                      className="duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/project-detail/?projectId=5">
                    <img
                      src="/images/projects/proj/Plus apart.png"
                      alt="Plus apart"
                      className="duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/project-detail/?projectId=1">
                    <img
                      src="/images/projects/proj/AB.png"
                      alt="AB"
                      className="duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/project-detail/?projectId=2">
                    <img
                      src="/images/projects/proj/Florence.png"
                      alt="Florence"
                      className="duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/project-detail/?projectId=6">
                    <img
                      src="/images/projects/proj/PLUS RES.png"
                      alt="PLUS RES"
                      className="duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
