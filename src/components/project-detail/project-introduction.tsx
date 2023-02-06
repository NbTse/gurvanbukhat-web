import Image from "next/image";

export default function ProjectIntroduction({ project }: any) {
  return (
    <>
      {project[0]?.introduction && (
        <section className="px-5 py-24 mx-auto lg:px-24 project-introduction">
          <div className="gap-3 md:grid md:grid-cols-2 md:grid-rows-1">
            <Image
              src={`${project && project[0].introduction.imgSrc}`}
              alt=" "
              width={540}
              height={675}
              className=" w-full object-cover sm:px-[25px]  sm:py-[20px] mb-[24px]"
            />

            <div className="text-white lg:py-[157px]">
              <p className="mb-6 lg:text-[40px] text-[20px] font-bold lg:text-start text-center">
                {project && project[0].introduction.name}
              </p>
              <p className="lg:text-[16px] text-[14px]  lg:text-start text-center">
                {project && project[0].introduction.desc}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
