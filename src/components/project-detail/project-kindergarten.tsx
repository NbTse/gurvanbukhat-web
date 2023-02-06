/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";

export default function ProjectKindergarten({ project }: any) {
  return (
    <>
      {project[0]?.kindergarten && (
        <section className="px-5 mx-auto lg:pb-24 lg:px-24 project-kindergarten">
          <div className="gap-3 md:grid md:grid-cols-2 md:grid-rows-1">
            <div className="text-white lg:py-5 lg:px-[30px]">
              <p className="mb-6 lg:text-[40px] text-[20px] font-bold lg:text-start text-center">
                {project && project[0].kindergarten.name}
              </p>
              <p className="lg:text-[16px] text-[14px]  lg:text-start text-center">
                {project && project[0].kindergarten.desc}
              </p>

              <ul className="mt-5 lg:ml-3 list-disc lg:text-start lg:text-[16px] text-[14px]">
                {project &&
                  project[0].kindergarten.list?.map((item: any, index: any) => {
                    return <li key={index}>{item.name}</li>;
                  })}
              </ul>
            </div>

            <Carousel
              showThumbs={true}
              showArrows={true}
              autoPlay
              className="mt-5"
            >
              {project &&
                project[0].kindergarten.images?.map((item: any, index: any) => {
                  return (
                    <div key={index}>
                      <img
                        className="carousel-img"
                        src={item.imgSrc}
                        alt="kinderkarten"
                      />
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
}
