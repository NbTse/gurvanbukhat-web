import CustomButton from "components/common/custom-button";

export default function ProjectContactSales({ project }: any) {
  return (
    <>
      <section className="px-5 py-24 mx-auto lg:px-24 project-contact-sales ">
        <div className="w-full mx-auto lg:w-[730px]  md:max-w-full">
          <div className="py-[60px]  lg:px-[95px] px-[30px]   bg-[#ffffff14] rounded-[16px]">
            <p className="lg:text-[28px] text-[20px] font-bold text-white mb-[30px] text-center">
              Борлуулалтын албатай холбогдох
            </p>
            <form method="POST">
              <label className="block mb-[20px]">
                <span className="text-white  text-[12px]">Таны нэр </span>
                <input
                  type="text"
                  name="name"
                  className="text-white block w-full mt-1 bg-transparent border-[#6E7191] rounded-md shadow-sm focus:border-[#2154EC] focus:ring focus:ring-[#2154EC] focus:ring-opacity-50"
                />
              </label>
              <label className="block mb-[20px]">
                <span className="text-white  text-[12px]">Имэйл хаяг</span>
                <input
                  name="email"
                  type="email"
                  className="text-white block w-full mt-1 bg-transparent border-[#6E7191] rounded-md shadow-sm focus:border-[#2154EC] focus:ring focus:ring-[#2154EC] focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block mb-[20px]">
                <span className="text-white text-[12px]">Утасны дугаар </span>
                <input
                  name="email"
                  type="email"
                  className="text-white block w-full mt-1 bg-transparent border-[#6E7191] rounded-md shadow-sm focus:border-[#2154EC] focus:ring focus:ring-[#2154EC] focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block mb-[20px]">
                <span className="text-white  text-[12px]">Сэтгэгдэл</span>
                <textarea
                  name="message"
                  className="text-white block w-full mt-1 bg-transparent border-[#6E7191] rounded-md shadow-sm focus:border-[#2154EC] focus:ring focus:ring-[#2154EC] focus:ring-opacity-50"
                  rows={3}
                ></textarea>
              </label>
              <CustomButton name="Илгээх" type="full" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
