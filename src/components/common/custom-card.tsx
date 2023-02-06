import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";

const CustomCard = ({
  name,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  type = "normal",
}: any) => {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0px 0px 70px #2154EC",
      }}
      className={`max-w-sm relative overflow-hidden bg-no-repeat bg-cover rounded-[16px] mb-4 cursor-pointer group
      ${type === "news" && "bg-[#ffffff14]"}   
      ${type === "managment-team-card" && "glass-white-card"}   
        `}
    >
      <Image
        src={imgSrc}
        alt=""
        width={imgWidth}
        height={imgHeight}
        style={{ width: "100%" }}
        className="rounded-t-[16px] max-w-sm  group-hover:scale-110 transition duration-300 ease-in-out group "
      />
      <div className="p-5">
        <div
          className={`
        ${type === "managment-team-card" && "text-center"}   
        `}
        >
          <h5 className="mb-[10px] lg:text-[20px] text-[16px] tracking-tight text-white  ">
            {name}
          </h5>
          {type === "managment-team-card" && (
            <p className="text-white lg:text-[14px] text-[12px]">
              {description}
            </p>
          )}
        </div>

        {type === "news" && (
          <p className="text-[#ffffffa3] text-[14px]">
            {moment(new Date()).format("MMM DD,YYYY")}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default CustomCard;
