import CustomButton from "components/common/custom-button";
import Image from "next/image";

export default function ProjectMobileHero({ project, children }: any) {
  return (
    <>
      <section className="mobile lg:hidden relative flex items-center justify-center h-[32rem]  overflow-hidden">
        <div className="z-30 flex items-center justify-center w-full h-full px-4 2xl:px-40 md:px-8">
          <div className="flex flex-col items-center py-16 mx-auto text-center ">
            <h1 className="lg:text-[28px] text-[16px] leading-none  text-white font-bold">
              {project && project[0].hero.name}
            </h1>
            <p className="mt-8 mb-12 lg:text-[56px] text-[20px] text-white font-bold">
              {project && project[0].hero.title}
            </p>
            <div className="flex gap-4">
              <div className="">
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
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto max-w-none">
          <source src={project[0].hero.videoSrc} type="video/mp4" />
        </video>
      </section>
    </>
  );
}
