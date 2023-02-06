import CustomButton from "components/common/custom-button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function ProjectCard({ id, name, desc, imgSrc }: any) {
  return (
    <>
      <div className="conic-box">
        <div className="flex flex-col px-6 rounded-lg md:flex-row">
          <div className="w-full md:w-2/3 lg:w-1/3 lg:relative lg:right-[35px] ">
            <Image
              src={`/images/projects/${imgSrc}.png`}
              alt=""
              width={500}
              height={281}
              className="w-[500px] h-[281px]"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-2/3 lg:w-2/3  lg:relative lg:right-[50px]">
            <h5 className="mb-4 lg:text-[28px] text-[16px] font-bold text-white lg:text-start">
              {name}
            </h5>
            <p className="mb-4 lg:text-[16px] text-[12px] text-[#ffffffa3] lg:text-start">
              {desc}
            </p>
            <div>
              <Link href={`/project-detail/?projectId=${id}`} passHref>
                <CustomButton name="Дэлгэрэнгүй" type="transparent">
                  <FaAngleRight />
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
