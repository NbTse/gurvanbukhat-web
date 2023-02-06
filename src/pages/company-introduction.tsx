import Banner from "components/common/banner";
import CompanyHistory from "components/company-introduction/company-history";
import Introduction from "components/company-introduction/introduction";
import Step from "components/company-introduction/step";

export default function CompanyIntroduction() {
  return (
    <>
      <Banner name="Компанийн танилцуулга" />
      <div className="bg-[url('/images/background2.png')] bg-cover  bg-repeat-y  ">
        <div className="mx-auto max-w-8xl">
          <div className="relative">
            <Introduction />
            <Step />
            <CompanyHistory />
          </div>
        </div>
      </div>
    </>
  );
}
