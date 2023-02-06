import Image from "next/image";

export default function Introduction({}) {
  return (
    <>
      <section className="px-5 mx-auto lg:py-10 lg:px-24 company-introduction">
        <div className="gap-3 md:grid md:grid-cols-2 md:grid-rows-1">
          <div className="w-full">
            <Image
              src="/images/company-introduction/company-intro.png "
              alt=" "
              width={540}
              height={375}
            />
          </div>

          <div className="text-white text-[16px]">
            <p className="mb-6">
              Үндэсний бүтээн байгуулагч “Гурван Бухат” Групп 2009 онд үйл
              ажиллагааны үндэс сууриа тавьснаас хойш өдгөө амжилттай өсөн тэлж,
              барилгын төслийн удирдлага, менежмент, хөрөнгө оруулалт,
              үйлдвэрлэл (бетон зуурмагийн үйлдвэр, хуванцар металл цонх хаалга,
              тавилгын үйлдвэрлэл, цахилгаан, дулаан хангамж, агаар сэлгэлтийн
              угсралт, үйлдвэрлэл) болон гадаад, дотоод худалдаа зэрэг үндсэн
              дөрвөн чиглэлээр үйл ажиллагаагаа эрчимтэй явуулж байна.
            </p>
            <p>
              Бид Монгол улсын барилгын салбарт жишиг тогтоохуйц, хүн-байгальд
              ээлтэй бодлого, төлөвлөлттэй, интерьер, экстерьер, тохижилтын
              оновчтой, шинэлэг шийдэл бүхий 2100 гаруй айлыг орон сууцаар
              хангах 8 төслийг хэрэгжүүлж, 1000 гаруй хүнийг ажлын байраар
              тогтмол хангахын зэрэгцээ группийн 9 салбар компанид 170 гаруй
              чадварлаг мэргэжилтэн, архитектор, инженер техникийн ажилтнууд
              нэгэн зорилго, нэгэн тэмүүллээр хамтдаа хичээнгүйлэн ажиллаж
              байна.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
