import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("components/common/location"), {
  ssr: false,
});

export default function ProjectLocation() {
  return (
    <>
      <section className="px-5 py-24 mx-auto lg:px-24 project-kindergarten">
        <div className="text-white lg:py-5 lg:px-[30px]">
          <p className="mb-6 lg:text-[40px] text-[20px] font-bold text-center ">
            ТӨСЛИЙН БАЙРШИЛ
          </p>
          <MapWithNoSSR />
        </div>
      </section>
    </>
  );
}
