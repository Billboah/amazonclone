import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "./features/basketSlice";

const CheckoutProduct = ({
  title,
  description,
  id,
  image,
  rating,
  price,
  hasPrime,
  count,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
      description: description,
      hasPrime: hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(
      removeFromBasket({
        id: id,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-white pl-[10px] pt-[10px] my-10">
      <img className="w-[150px] md:w-[200px] h-auto" src={image} alt="" />
      <div className="md:ml-10 flex flex-col justify-between">
        <p className="my-2 font-bold">{title}</p>
        <div>
          <div>
            {Array(Math.round(rating))
              .fill()
              .map((rating, index) => (
                <StarIcon key={index} className="text-yellow-400 w-2" />
              ))}
          </div>
          <p className="text-xs  line-clamp-2 my-2">{description}</p>
          <p className="">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          {hasPrime && (
            <div className="flex items-center">
              <img
                className="w-[30px]"
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
                alt=""
              />
              <p className="text-xs">Free delivery</p>
            </div>
          )}
          <div className="my-[20px]">
            <span>Quantity:</span>
            <span className="font-bold ml-[5px]">{count}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-[30px] mx-[10px] justify-end">
        <button
          className="w-[150px]  button mb-[10px]"
          onClick={addItemToBasket}
        >
          Add Item
        </button>
        <button
          className="w-[150px] button mt-[10px]"
          onClick={removeItemFromBasket}
        >
          {count === 1 ? "Remove from basket" : "Remove Item"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
