import Image from "next/image";

export default function CompanyHistory({}) {
  return (
    <>
      <section className="px-5 py-10 mx-auto lg:px-24 company-history">
        <h2 className="text-center text-white lg:text-[40px] text-[24px] mb-[48px] font-bold">
          КОМПАНИЙН ТҮҮХ
        </h2>
        <div>
          <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid text-blue-50">
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div className="w-full col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md card rounded-xl">
                <h3 className=" text-[20px] text-[#2154EC] mb-[12px]"> 2009</h3>
                <p className="text-white text-[24px] leading-[35px] font-bold mb-[12px]">
                  Эхлэл
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Худалдааны чиглэлээр үйл ажиллагааны үндэс сууриа тавив.
                </p>
              </div>
              <div className="relative col-start-5 col-end-6 pt-5 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full bg-[#2154EC] pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 right-5"></div>

                <Image
                  className="absolute -mt-3 bg-[#00043C] rounded-full shadow  top-7 "
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
            {/* right */}
            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full bg-[#2154EC] pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 left-5"></div>

                <Image
                  className="absolute  -mt-3 bg-[#00043C] rounded-full shadow b top-7"
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md card rounded-xl">
                <h3 className=" text-[20px] text-[#2154EC] mb-[12px]"> 2012</h3>
                <p className="text-white text-[24px] leading-[35px] mb-[12px] font-bold">
                  Анхны угсралт
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Эрчим хүч, дулаан хангамжийн тоног төхөөрөмжийн ханган
                  нийлүүлэлт, угсралт суурилуулалт хийж эхлэв. Дулаан, цахилгаан
                  тоног төхөөрөмжийн угсралтын тусгай зөвшөөрлөө авч, анхны
                  дулааны шугам угсралтыг амжилттай гүйцэтгэв.
                </p>
              </div>
            </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div className="col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md card rounded-xl">
                <h3 className=" text-[20px] text-[#2154EC] mb-[12px]"> 2014</h3>
                <p className="text-white text-[24px] leading-[35px] mb-[12px] font-bold">
                  Анхны барилга
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Барилга угсралтын чиглэлээр үйл ажиллагаагаа өргөжүүлэв.
                  Зоорийн давхартайгаа нийт 4 давхар үйлчилгээний барилга барьж,
                  хүлээлгэн өгөв.
                </p>
              </div>
              <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full bg-[#2154EC]  pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 right-5"></div>

                <Image
                  className="absolute  -mt-3 bg-[#00043C] rounded-full shadow b top-7"
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
            {/* right */}
            <div className="flex md:contents ">
              <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full bg-[#2154EC]  pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 left-5"></div>

                <Image
                  className="absolute  -mt-3 bg-[#00043C] rounded-full shadow b top-7"
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-full col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md card rounded-xl">
                <h3 className=" text-[20px] text-[#2154EC] mb-[12px]"> 2014</h3>
                <p className="text-white text-[24px] leading-[35px] mb-[12px] font-bold">
                  Амжилттай түншлэл
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Скайвип констракшнтай түншлэлийн гэрээ байгуулж, үйл
                  ажиллагаагаа тэлэв.
                </p>
              </div>
            </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div className="col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md card rounded-xl">
                <h3 className="text-[20px] text-[#2154EC] mb-[12px]"> 2015</h3>
                <p className="text-white text-[24px] leading-[35px] font-bold mb-[12px]">
                  Дистрибьютерийн эхлэл
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Дулааны тоног төхөөрөмжийн Danfoss брэндийн дистрибьютерийн
                  эрхийг анх удаа авч, олон улсын харилцааны хөгжлийн суурь
                  тавигдав.
                </p>
              </div>
              <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full  bg-[#2154EC]  pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 right-5"></div>

                <Image
                  className="absolute -mt-3 bg-[#00043C] rounded-full shadow b top-7"
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
            {/* right */}
            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full bg-[#2154EC]  pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 left-5"></div>

                <Image
                  className="absolute -mt-3 bg-[#00043C] rounded-full shadow b top-7"
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md card rounded-xl">
                <h3 className=" text-[20px] text-[#2154EC] mb-[12px]"> 2018</h3>
                <p className="text-white text-[24px] leading-[35px] mb-[12px] font-bold">
                  Анхны төсөл
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Өмнөговь аймгийн төвд “Даланзадгад апартмент“ бие даасан анхны
                  төслөө амжилттай хэрэгжүүлэв. ХАМТАРСАН ТӨСЛҮҮД Хамтарсан
                  төслүүдийг амжилттай гүйцэтгэж, хүлээлгэн өгөв. - Sky
                  Residence 3 - Bayan-Burd Residence - Dalanzadgad Apartment 2
                </p>
              </div>
            </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div className="col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md card rounded-xl">
                <h3 className=" text-[20px] text-[#2154EC] mb-[12px]"> 2021</h3>
                <p className="text-white text-[24px] leading-[35px] mb-[12px] font-bold">
                  “Гурван Бухат” Групп үүсэн байгуулагдав
                </p>
                <p className="text-white lg:text-[16px] text-[12px] mb-[12px]">
                  Үйл ажиллагааны үндсэн 4 чиглэл, 160 үндсэн ажилтантайгаар үйл
                  ажиллагаагаа өргөжүүллээ.
                </p>
              </div>
              <div className="relative col-start-5 col-end-6 pb-5 mr-10 md:mx-auto">
                <div className="flex items-center justify-center w-[2.5rem] h-full">
                  <div className="w-[1px] h-full bg-[#2154EC] pointer-events-none" />
                </div>
                <div className="hidden xl:inline-block absolute border-t-[1px] w-[3.5rem] border-[#2154EC] top-9 right-5"></div>

                <Image
                  className="absolute  -mt-3 bg-[#00043C] rounded-full shadow b top-7"
                  src="/images/company-introduction/company-history.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
