import CustomButton from "components/common/custom-button";
import CustomShadowBox from "components/common/custom-shadowbox";
import Image from "next/image";

export default function ProjectContact({ project }: any) {
  return (
    <>
      {project[0]?.contact && (
        <section className="px-5 mx-auto lg:py-24 lg:px-24 project-contact">
          <div className="bg-[#00043C]">
            <CustomShadowBox
              name={project && project[0].contact.name}
              size="normal"
            >
              <div className="flex justify-center gap-3">
                <CustomButton name="Холбоо барих" type="transparent-contact">
                  <Image
                    src="/images/projects/icons/message.svg"
                    alt="message"
                    width={24}
                    height={24}
                  />
                </CustomButton>

                <CustomButton
                  name={project && project[0].contact.number}
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
            </CustomShadowBox>
          </div>
        </section>
      )}
    </>
  );
}
