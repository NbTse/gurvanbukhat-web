import ProjectCard from "components/project-card";

export default function ProjectList({}) {
  return (
    <>
      <section className="px-5 mx-auto lg:py-0 py-[10px] lg:px-24 project-list">
        <ProjectCard
          id="1"
          name="Арга билиг цогцолбор хотхон"
          desc="Бизнес зэрэглэлийн “Арга Билиг” төсөл нь 11,000 мкв талбайд, 5
              блокоос бүрдэх, 800 айлын цогцолбор хотхон юм. Тухайн бүсчлэлдээ
              жишиг болж буй уг бүтээн байгуулалт нь оршин суугчдын хамтын
              харилцааг эрхэмлэсэн коммюнити центр, насны ангилал бүхий хүүхдийн
              тоглоомын талбай, 270 автомашины ил зогсоол болон 250 автомашины
              дулаан зогсоол зэрэг оршин суугчдынхаа хэрэгцээнд тулгуурласан,
              архитекторын ухаалаг төлөвлөлттэй төсөл гэдгээрээ онцлогтой."
          imgSrc="1"
        />
        <ProjectCard
          id="2"
          name="ДАЛАНЗАДГАД АПАРТМЕНТ 2"
          desc="Даланзадгад Апартмент нь оршин суугчдын аюулгүй байдал, тав тухыг хангасан, олон жилийн туршлагатай, мэргэшсэн хамт олны гүйцэтгэж буй 24 айлын орон сууцны төсөл юм."
          imgSrc="2"
        />
        <ProjectCard
          id="3"
          name="LUX 16 АПАРТМЕНТ"
          desc="Лакс 16 апартмент” нь бүрэн цутгамал хийцлэл бүхий 16 давхар, нэг блок төсөл бөгөөд нэгдүгээр давхартаа үйлчилгээний төв, 2-16 дугаар давхартаа оновчтой, зөв зохион байгуулалт бүхий 2-3 өрөөний сонголттой, 105 айлын орон сууц юм. Гаднаа хүүхдийн тоглоомын талбай, автомашины зогсоолтойгоор шийдсэн нь гэр бүлийн гишүүн бүрийн хэрэгцээнд нийцсэн төлөвлөлт юм."
          imgSrc="3"
        />
        <ProjectCard
          id="4"
          name="АДМИРАЛ АПАРТМЕНТ"
          desc="Оршин суугчдын аюулгүй байдал, тав тухыг хангасан 16 давхар 144 айлын орон сууцны төсөл юм."
          imgSrc="4"
        />
        <ProjectCard
          id="5"
          name="PLUS RESIDENCE"
          desc="Улаанбаатар хотын “А” зэрэглэлийн бүсэд сүндэрлэж буй PLUS Residence нь хоёр блок, 16 давхар, лобби танхим бүхий 183 айлын бизнес зэрэглэлийн төсөл юм. Барилгуудыг холбох гурван давхар үйлчилгээний төвтэй бөгөөд террас дээр нь хүүхдийн тоглоомын талбайг шийдсэнээрээ онцгой. Цаг хугацаа, тав тухыг эрхэмлэгч, ажил хэрэгч хүмүүсийн хэрэгцээнд нийцүүлэн оффис, худалдаа үйлчилгээ, хүүхдийн цэцэрлэг, фитнес төв гэх мэт хэрэгцээт бүхнийг гэрт ойр байдлаар төлөвлөсөн."
          imgSrc="1"
        />

        <ProjectCard
          id="6"
          name="PLUS APARTMENT"
          desc="“Плас Апартмент” төсөл нь Улаанбаатар хотын худалдааны гол бүсэд баригдаж буй бүрэн цутгамал хийцлэлтэй, 16 давхар, стандарт болон дуплекс загварыг хослуулсан, 121 айлын орон сууцны төсөл юм. Орон сууц хүүхдийн тоглоомын талбай, автомашины дулаан болон ил зогсоолтойгоос гадна, дэргэдээ зөвхөн оршин суугчдадаа зориулсан хүүхдийн цэцэрлэг шийдсэнээрээ онцлогтой."
          imgSrc="2"
        />
      </section>
    </>
  );
}
