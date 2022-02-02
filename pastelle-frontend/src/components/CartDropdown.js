import React, { useState, useEffect } from "react";

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div onClick={toggle}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#f9a8d4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="bg-white
          shadow-inner
          

                    absolute
                    rounded-lg
                    w-60
                    h-24
                    right-8
                    
                    "
        >
          <p className="text-center
                        my-9
                        ">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
