import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const TextField = ({ type, Icon, placeholder, register, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="bg-gra-light h-[50px] md:w-[350px] rounded-full flex items-center px-8 gap-5 border border-gray focus-within:border-one ">
        <Icon className="text-[20px] text-gray " />
        <input
          type={`${showPassword ? "text" : type}`}
          className="flex-1 bg-transparent border-none outline-none text-gray-dark"
          placeholder={placeholder}
          {...register}
        />
        {type === "password" &&
          (showPassword ? (
            <AiFillEye
              className="text-gray cursor-pointer h-[40px]"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              className="text-gray cursor-pointer h-[20px]"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ))}
      </div>
      <p className="text-red px-5">{errorMessage}</p>
    </div>
  );
};

export default TextField;
