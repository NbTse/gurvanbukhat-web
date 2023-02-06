/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

export default function ProjectRoom({ project }: any) {
  return (
    <>
      {project[0]?.room && (
        <section className="px-5 py-24 mx-auto lg:px-24 project-room">
          <h2 className="text-center text-white lg:text-[40px] text-[20px] font-bold mb-[20px]">
            ӨРӨӨНИЙ ЗОХИОН БАЙГУУЛАЛТ
          </h2>

          <div className="gap-3 md:grid md:grid-cols-2 md:grid-rows-1">
            <div>
              <Image
                src={project && project[0].room.img}
                alt="room"
                width={540}
                height={464}
              />
            </div>
            <Carousel
              autoPlay
              useKeyboardArrows
              swipeable={true}
              className="mt-5"
            >
              {project &&
                project[0].room.images?.map((item: any, index: any) => {
                  return (
                    <div key={index}>
                      <img
                        className="carousel-img"
                        src={item.imgSrc}
                        alt="kinderkarten-1"
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
