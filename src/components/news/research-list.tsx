import CustomCard from "components/common/custom-card";
import Link from "next/link";

export default function ResearchList({}) {
  return (
    <>
      <section className="px-5 mx-auto lg:px-24 news">
        <div className="flex flex-col w-full my-10 text-center">
          <h2 className="mb-[30px] text-center text-white lg:text-[40px] text-[20px] font-bold">
            ҮХХ/Зах зээлийн сүүлийн үеийн судалгаа, дүн шинжилгээ тойм
          </h2>
        </div>
        <div className="bg-[url('/images/news-card/bg.png')] bg-cover bg-center">
          <div className="gap-3 md:grid md:grid-cols-3 md:grid-rows-1 sm:grid-row-2">
            <Link href="/news/1">
              <CustomCard
                name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                imgSrc="/images/news-card/card.png"
                imgWidth="350"
                imgHeight="200"
                type="news"
              />
            </Link>
            <Link href="/news/1">
              <CustomCard
                name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                imgSrc="/images/news-card/card.png"
                imgWidth="350"
                imgHeight="200"
                type="news"
              />
            </Link>
            <Link href="/news/1">
              <CustomCard
                name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                imgSrc="/images/news-card/card.png"
                imgWidth="350"
                imgHeight="200"
                type="news"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
