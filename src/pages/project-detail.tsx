import ProjectDetailHero from "components/project-detail/hero";
import ProjectAdvantages from "components/project-detail/project-advantages";
import ProjectChoose from "components/project-detail/project-choose";
import ProjectCommunityCenter from "components/project-detail/project-community-center";
import ProjectContact from "components/project-detail/project-contact";
import ProjectContactSales from "components/project-detail/project-contact-sales";
import ProjectEquipment from "components/project-detail/project-equipment";
import ProjectIntroduction from "components/project-detail/project-introduction";
import ProjectKindergarten from "components/project-detail/project-kindergarten";
import ProjectLocation from "components/project-detail/project-location";
import ProjectRoom from "components/project-detail/project-room";
import {
  admiral,
  argabileg,
  dalanzadgad,
  lux,
  plusapartment,
  plusresidence,
} from "lib/json/projects";
import { useRouter } from "next/router";
import Custom404 from "./404";
import ProjectMobileHero from "components/project-detail/mobile-hero";

export default function Projects() {
  const router = useRouter();

  // const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
  // const myRef = useRef(null);

  const projectId = router.query.projectId;

  const project =
    projectId === "1"
      ? argabileg
      : projectId === "2"
      ? dalanzadgad
      : projectId === "3"
      ? lux
      : projectId === "4"
      ? admiral
      : projectId === "5"
      ? plusresidence
      : projectId === "6"
      ? plusapartment
      : "";

  return (
    <>
      {project ? (
        <>
          <div className="hidden lg:block">
            <ProjectDetailHero project={project}>
              <div
              // onClick={() => scrollToRef(myRef)}
              >
                <a
                  className="ca3-scroll-down-link ca3-scroll-down-arrow"
                  data-ca3_iconfont="ETmodules"
                  data-ca3_icon=""
                ></a>
              </div>
            </ProjectDetailHero>
          </div>
          <ProjectMobileHero project={project} />

          <div className="bg-[url('/images/background2.png')] bg-cover  bg-repeat-y">
            <div className="mx-auto max-w-8xl">
              <div className="relative">
                <ProjectIntroduction project={project} />
              </div>
            </div>
            <ProjectChoose project={project} />

            <div className="mx-auto max-w-8xl">
              <ProjectAdvantages project={project} />
              <ProjectKindergarten project={project} />
              <ProjectCommunityCenter project={project} />
              <ProjectEquipment project={project} />
              <ProjectRoom project={project} />
              <ProjectContact project={project} />
              <ProjectLocation />
              <ProjectContactSales project={project} />
            </div>
          </div>
        </>
      ) : // <Custom404 />
      null}
    </>
  );
}
