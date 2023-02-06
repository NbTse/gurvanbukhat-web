import CustomCard from "components/common/custom-card";

export default function ManagmentTeam({}) {
  return (
    <>
      <section className="px-5 pt-24 mx-auto lg:px-24 managment-team">
        <h2 className="text-white lg:text-[40px]  text-[20px] font-bold text-center mb-[40px]">
          УДИРДЛАГЫН БАГ
        </h2>
        <div className="gap-[30px] grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
          <CustomCard
            name="М.Гантулга"
            description="Гурван бухат группийн ТУЗ-ийн дарга"
            imgSrc="/images/about/1.png"
            imgWidth="255"
            imgHeight="250"
            type="managment-team-card"
          />
          <CustomCard
            name="О.Ганхөлөг"
            description="Үйлдвэрлэл эрхэлсэн захирал"
            imgSrc="/images/about/2.png"
            imgWidth="255"
            imgHeight="250"
            type="managment-team-card"
          />
          <CustomCard
            name="Э.Билэгт"
            description="Үйл ажиллагаа эрхэлсэн захирал"
            imgSrc="/images/about/3.png"
            imgWidth="255"
            imgHeight="250"
            type="managment-team-card"
          />
          <CustomCard
            name="А.Жаргалмаа"
            description="Санхүү эрхэлсэн захирал"
            imgSrc="/images/about/4.png"
            imgWidth="255"
            imgHeight="250"
            type="managment-team-card"
          />

          <CustomCard
            name="Хандсүрэн"
            description="Борлуулалтын албаны дарга"
            imgSrc="/images/about/6.png"
            imgWidth="255"
            imgHeight="250"
            type="managment-team-card"
          />
          <CustomCard
            name="Батгэрэл"
            description="Захиргаа, хүний нөөцийн газрын захирал"
            imgSrc="/images/about/7.png"
            imgWidth="255"
            imgHeight="250"
            type="managment-team-card"
          />
        </div>
      </section>
    </>
  );
}
