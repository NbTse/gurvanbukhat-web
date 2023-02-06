import Banner from "components/common/banner";
import ProjectList from "components/projects/list";

export default function Projects() {
  return (
    <>
      <Banner name="Төслүүд" />
      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <section className="px-5 mx-auto lg:py-24 lg:px-24 project-list">
            <div className="flex justify-center ">
              <div className="hidden xl:inline-block">
                <video
                  src="/videos/tusluud.mp4"
                  autoPlay
                  loop
                  muted
                  className="lg:w-[1110px] lg:h-[800px] rounded-lg  "
                ></video>
              </div>
            </div>
            {/* mobile */}
            <div className="lg:hidden">
              <video
                src="/videos/tusluud.mp4"
                controls
                className="lg:w-[1110px] lg:h-[800px] rounded-lg bg-[url('/images/projects/5.png')] bg-cover"
              ></video>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-[url('/images/background2.png')] bg-cover bg-repeat">
        <div className="mx-auto max-w-8xl">
          <div className="relative">
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
}
