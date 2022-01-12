import React, {useState, useEffect} from "react";
import LoginRegisterModal from "./LoginRegisterModal";

const User = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //   setIsOpen(!isOpen);
    // };
  return (
    <div onClick={() => setIsOpen(true)}>
     {/* <div onClick={() => setIsOpen((isOpen) => !isOpen)}> */}
        <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="pink"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
        </div>
        {isOpen && (<LoginRegisterModal/>)}
    </div>
  );
};

export default User;
