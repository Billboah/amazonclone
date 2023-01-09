import React from "react";
import CurrencyFormat from "react-currency-format";
import { selectItems, selectUser } from "./features/basketSlice";
import { useSelector } from "react-redux";

const Subtotal = () => {
  const basket = useSelector(selectItems);
  const user = useSelector(selectUser);

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, basket) => {
      return basket.price + amount;
    }, 0);

  return (
    <div className="flex flex-col justify-space-between p-[20px] bg-white border-solid border-2 border-slate-100 m-[10px]">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input type="checkbox" className="mr-5px" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
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
