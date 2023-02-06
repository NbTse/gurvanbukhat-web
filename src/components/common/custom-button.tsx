const CustomButton = ({ name, type = "normal", children }: any) => {
  return (
    <button
      type="submit"
      className={` lg:text-[15px] md:text-[10px]  rounded-[8px] hover:bg-[#2154EC] hover:border-[#2154EC] ${
        type === "normal" &&
        "bg-[#2154EC] text-white  flex items-center px-[32px] py-[12px]"
      }   
        ${
          type === "transparent" &&
          "text-white bg-transparent border border-[#2154EC] flex items-center px-[32px] py-[12px]  hover:bg-[#2154EC]"
        }   
          ${
            type === "contact" &&
            "text-white bg-[#2154EC]  flex  flex-row-reverse items-center lg:px-[32px] py-[10px] text-[12px] pr-[5px]"
          }   
        ${
          type === "transparent-contact" &&
          "text-white bg-transparent border text-[12px] border-white flex  flex-row-reverse items-center lg:px-[32px] pr-[5px] py-[10px]"
        }
           ${
             type === "subscribe" &&
             "text-white bg-transparent border border-white   items-center px-[12px] py-[12px] ml-5 lg:text-[16px] !text-[14px]"
           }   
      ${
        type === "full" &&
        "bg-[#2154EC] text-white  flex items-center  py-[12px] w-full  justify-center  focus:border-[#2154EC] focus:ring focus:ring-[#2154EC] focus:ring-opacity-50"
      }
        `}
    >
      {name}
      <div className="ml-2 body">{children}</div>
    </button>
  );
};

export default CustomButton;
