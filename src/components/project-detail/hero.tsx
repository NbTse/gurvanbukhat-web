import CustomButton from "components/common/custom-button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetailHero({ project, children }: any) {
  return (
    <>
      <section className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 flex justify-center mx-auto max-w-7xl">
          <motion.div
            className="items-center inline-block p-3 pt-0 mx-auto max-w-8xl lg:flex "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col items-center py-16 mx-auto text-center md:py-32 ">
              <h1 className="lg:text-[28px] text-[16px] leading-none  text-white font-bold">
                {project && project[0].hero.name}
              </h1>
              <p className="mt-8 mb-12 lg:text-[56px] text-[20px] text-white font-bold">
                {project && project[0].hero.title}
              </p>
              <div className="flex mx-10 mb-[15rem]">
                <div className="mr-10">
                  <CustomButton name="Холбоо барих" type="transparent-contact">
                    <Image
                      src="/images/projects/icons/message.svg"
                      alt="message"
                      width={24}
                      height={24}
                    />
                  </CustomButton>
                </div>

                <div>
                  <CustomButton
                    name={project && project[0].hero.contact}
                    type="contact"
                  >
                    <Image
                      src="/images/projects/icons/contact.svg"
                      alt="contact"
                      width={24}
                      height={24}
                    />
                  </CustomButton>
                </div>
              </div>
              <div>{children}</div>
            </div>
          </motion.div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={project[0].hero.videoSrc} type="video/mp4" />
        </video>
      </section>
    </>
  );
}
