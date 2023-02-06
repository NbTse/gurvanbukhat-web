import CustomButton from "components/common/custom-button";
import CustomShadowBox from "components/common/custom-shadowbox";
import { motion } from "framer-motion";

export default function Join({}) {
  return (
    <>
      <section className="px-5 py-24 pt-0 mx-auto lg:px-24 join">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <CustomShadowBox
            name="Join Our Team!"
            desc="Want to be part of a dedicated team driven by promoting and
              protecting the health of people and communities? Check out our
              open positions."
            size="big"
          >
            <div className="flex justify-center ">
              <CustomButton name="See Open Positions" type="transparent" />
            </div>
          </CustomShadowBox>
        </motion.div>
      </section>
    </>
  );
}
