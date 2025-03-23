import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Passwordinput({ value, onChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] border-blue-500 rounded-md px-4 py-2">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full outline-none bg-transparent text-sm mr-3 rounded"
      />
      <div onClick={togglePassword}>
        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
      </div>
    </div>
  );
}

export default Passwordinput;
