import { motion } from "framer-motion";

export default function Step({}) {
  return (
    <>
      <section className="px-5 mx-auto lg:px-24 company-introduction-step">
        <div className="gap-[30px] md:grid md:grid-cols-3 md:grid-rows-1 mb-[20px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-[30px]"
          >
            <div className="hidden xl:inline-block">
              <p className="text-stroke">1</p>
              <p className="text-white text-[28px]  mb-[15px] font-bold">
                Эрхэм зорилго
              </p>
            </div>
            {/* mobile */}
            <div className="flex items-center justify-start gap-10 lg:hidden">
              <p className="text-stroke">1</p>
              <p className="text-white text-[20px] font-bold  mb-[15px]">
                Эрхэм зорилго
              </p>
            </div>

            <p className="text-white lg:text-[16px] text-[14px]  mb-[15px] text-left w-[350px]">
              Бид дэвшилэлтэд технологитой хөл нийлүүлэн алхаж, судалгаа,
              хөгжүүлэлт, инженерчлэлийн оновчтой шийдэлд тулгууралсан, хүн
              төвтэй хөгжлийг үйл ажиллагааныхаа цөм болгон зардлыг хэмнэх
              замаар эрчим хүчний хэмнэлттэй, байгальд ээлтэй байх зарчмыг
              нийгэмд төлөвшүүлэн, улсынхаа хөгжил дэвшилд бодит хувь нэмэр
              оруулна.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-[30px]"
          >
            <div className="hidden xl:inline-block">
              <p className="text-stroke">2</p>

              <p className="text-white text-[28px] mb-[15px]"> Алсын хараа</p>
            </div>
            {/* mobile */}

            <div className="flex items-center justify-start gap-10 lg:hidden">
              <p className="text-stroke">2</p>

              <p className="text-white text-[20px] font-bold mb-[15px]">
                Алсын хараа
              </p>
            </div>
            <p className="text-white lg:text-[16px] text-[14px] text-left w-[350px]">
              Тогтвортой хөгжлийг хадгалах замаар, дэлхийд жишигдэх бүтээн
              байгуулалтыг цогцлоож, урт хугацааны чанар, үнэ цэнийг үйлдвэрлэн,
              бүтээж, түгээн дэлгэрүүлнэ.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="hidden xl:inline-block">
              <p className="text-stroke">3</p>

              <p className="text-white text-[28px]  mb-[15px]">Үнэт зүйлс</p>
            </div>
            {/* mobile */}

            <div className="flex items-center justify-start gap-10 lg:hidden ">
              <p className="text-stroke">3</p>
              <p className="text-white text-[20px] font-bold mb-[15px]">
                Үнэт зүйлс
              </p>
            </div>
            <ul className="text-white lg:text-[16px] text-[14px] ">
              <li> Ёс зүй</li>
              <li> Аюулгүй ажиллагаа</li>
              <li>Хариуцлага</li>
              <li> Дэвшилтэт технологи </li>
              <li> Оновчтой инженерчлэл, төлөвлөлт</li>
              <li> Тогтвортой хөгжил</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
