const CustomInput = ({
  register,
  placeholder,
  label,
  name,

  type = "text",
  disabled = false,
  size = "normal",
}: any) => {
  return (
    <>
      <label>
        <span className="mb-1">{label}</span>
        <input
          className={`form-input-text ${size === "small" ? " small" : ""}
        ${
          type === "email" &&
          "lg:w-1/4 py-3 lg:pl-2 pl-[16px] lg:pr-2 mt-2 text-white lg:text-[16px] text-[14px] transition duration-500 ease-in-out transform bg-transparent border rounded-md"
        }  
      `}
          placeholder={placeholder}
          id={name}
        />
      </label>
    </>
  );
};

export default CustomInput;
