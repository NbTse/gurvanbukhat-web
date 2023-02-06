import Image from "next/image";
import { motion } from "framer-motion";

export default function BranchCompany({}) {
  return (
    <>
      <section className="px-5 mx-auto lg:px-24 branch-company">
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
            САЛБАР КОМПАНИУД
          </h2>
        </motion.div>
        <div className="gap-[30px] grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
          <div className="flex items-center justify-center lg:p-[10px]">
            <Image
              src="/images/branch-company/1.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=""
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/2.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/3.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/4.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/5.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/6.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/7.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
          <div className="flex items-center justify-center  lg:p-[10px]">
            <Image
              src="/images/branch-company/8.png"
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
              alt=" "
              width={255}
              height={168}
            />
          </div>
        </div>
      </section>
    </>
  );
}
