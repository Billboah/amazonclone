import React from "react";
import { selectItems, selectUser } from "./features/basketSlice";
import { useSelector } from "react-redux";

const Subtotal: React.FC = () => {
  const basket = useSelector(selectItems);
  const user = useSelector(selectUser);

  const getBasketTotal =  basket?.reduce((total:number, basket:{price:number}) => {
      return basket.price + total
    }, 0);

  return (
    <div className="flex flex-col justify-space-between p-[20px] bg-white border-solid border-2 border-slate-100 m-[10px]">
          <>
            <p>
              Subtotal ({basket.length} items): <strong>$ {getBasketTotal.toFixed(2)}</strong>
            </p>
            <small className="flex items-center">
              <input type="checkbox" className="mr-5px" />
              This order contains gift
            </small>
          </>
      <button
        disabled={!user}
        className={`button mt-[10px] ${
          !user &&
          "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed active:from-gray-300 active:to-gray-500 focus:ring-0"
        }`}
      >
        {user ? "Proceed to checkout" : "Sign in to checkout"}
      </button>
    </div>
  );
};

export default Subtotal;
