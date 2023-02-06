import { motion } from "framer-motion";

export default function Banner({ name }: any) {
  return (
    <div className="relative mb-[40px]">
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
        <section className="banner">
          <h2 className="text-white py-[97.5px] lg:w-full w-[180px] lg:text-[64px] text-[20px] font-bold">
            {name}
          </h2>
        </section>
        <div className="banner-shadow"></div>
      </motion.div>
    </div>
  );
}
