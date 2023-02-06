import CustomButton from "components/common/custom-button";
import Location from "components/common/location";

export default function Feedback({}) {
  return (
    <>
      <section className="px-5 py-24 mx-auto lg:px-24 news">
        <div className="gap-[30px] md:grid md:grid-cols-2 md:grid-rows-1">
          <div>
            <h2 className="text-white text-[16px] mb-[20px]">Санал хүсэлт</h2>
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
                <span className="text-white  text-[12px]">Санал хүсэлт</span>
                <textarea
                  name="message"
                  className="text-white block w-full mt-1 bg-transparent border-[#6E7191] rounded-md shadow-sm focus:border-[#2154EC] focus:ring focus:ring-[#2154EC] focus:ring-opacity-50"
                  rows={3}
                ></textarea>
              </label>
              <CustomButton name="Илгээх" type="normal" />
            </form>
          </div>
          <div>{/* <Location /> */}</div>
        </div>
      </section>
    </>
  );
}
