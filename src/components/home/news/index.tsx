import CustomCard from "components/common/custom-card";
import { motion } from "framer-motion";

export default function News({}) {
  return (
    <>
      <section className="px-5 pt-0 mx-auto lg:py-20 lg:px-24 news">
        <motion.div
          className="flex flex-col w-full my-10 mt-0 text-center"
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
            Мэдээлэл
          </h2>
        </motion.div>
        <div className="gap-3 md:grid md:grid-cols-3 md:grid-rows-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CustomCard
              name="Bankman-Fried Would Like to Talk With Musk About Twitter"
              imgSrc="/images/news-card/card.png"
              imgWidth="350"
              imgHeight="200"
              type="news"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CustomCard
              name="Bankman-Fried Would Like to Talk With Musk About Twitter"
              imgSrc="/images/news-card/card2.png"
              imgWidth="350"
              imgHeight="200"
              type="news"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CustomCard
              name="Bankman-Fried Would Like to Talk With Musk About Twitter"
              imgSrc="/images/news-card/card3.png"
              imgWidth="350"
              imgHeight="200"
              type="news"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
