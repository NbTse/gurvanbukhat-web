import Activity from "components/home/activity";
import BranchCompany from "components/home/branch-company";
import Hero from "components/home/hero";
import Join from "components/home/join";
import News from "components/home/news";
import Project from "components/home/project";
import Statistic from "components/home/statistic";

export default function Index() {
  return (
    <div
      style={{
        backgroundImage: `url(/images/background1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Hero />

      <div className="overflow-hidden">
        <div className="mx-auto max-w-8xl">
          <div className="relative">
            <Activity />
          </div>
        </div>

        <Statistic />
        <Project />

        <div className="mx-auto max-w-8xl">
          <div className="relative">
            <BranchCompany />
            <News />
            <Join />
          </div>
        </div>
      </div>
    </div>
  );
}
