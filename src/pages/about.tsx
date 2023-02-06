import GeneralDirector from "components/about/general-director";
import ManagmentTeam from "components/about/managment-team";
import Banner from "components/common/banner";
import BranchCompany from "components/home/branch-company";

export default function About() {
  return (
    <>
      <Banner name="Ерөнхий захирлын мэндчилгээ" />

      <div className="mx-auto max-w-8xl">
        <div className="relative">
          <GeneralDirector />
        </div>
      </div>
      <div className="bg-[url('/images/background2.png')] bg-cover bg-repeat-round">
        <div className="mx-auto max-w-8xl">
          <div className="relative">
            <ManagmentTeam />
            <BranchCompany />
          </div>
        </div>
      </div>
    </>
  );
}
