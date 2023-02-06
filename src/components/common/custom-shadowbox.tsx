export default function CustomShadowBox({ name, desc, size, children }: any) {
  return (
    <>
      <div
        className="hidden lg:block lg:py-[60px] lg:px-[145.5px] px-[70px] py-[30px] rounded-[16px] bg-no-repeat bg-cover "
        style={{
          boxShadow: "0px 0px 70px #2154EC",
          backgroundImage: `url(/images/join/card-bg.png)`,
        }}
      >
        <div className="flex flex-col w-full my-5 text-center lg:text-center">
          <h2
            className={`mb-[20px] text-white text-center 
            ${size === "normal" && "lg:text-[28px] text-[20px]"} 
            ${size === "big" && "lg:text-[40px] text-[20px] font-bold"} `}
          >
            {name}
          </h2>
          <p className="mb-10 text-white lg:text-[16px] text-[12px]">{desc}</p>
        </div>
        <div className="flex justify-center lg:text-[16px] text-[12px]">
          {children}
        </div>
      </div>

      <div
        className="lg:hidden lg:py-[60px] lg:px-[145.5px] px-[30px] py-[30px] rounded-[16px] bg-no-repeat bg-cover"
        style={{
          boxShadow: "0px 0px 70px #2154EC",
          backgroundImage: `url(/images/join/mobile-bg.png)`,
        }}
      >
        <div className="flex flex-col w-full my-5 text-center lg:text-center">
          <h2
            className={`mb-[20px] text-white text-center 
            ${size === "normal" && "lg:text-[28px] text-[20px]"} 
            ${size === "big" && "lg:text-[40px] text-[20px]"} `}
          >
            {name}
          </h2>
          <p className="mb-10 text-white lg:text-[16px] text-[12px]">{desc}</p>
        </div>
        <div className="flex justify-center lg:text-[16px] text-[12px]">
          {children}
        </div>
      </div>
    </>
  );
}
