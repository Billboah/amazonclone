import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToBasket } from "./features/basketSlice";

const SearchProducts = ({
  title,
  category,
  description,
  id,
  rating,
  image,
  price,
}) => {
  const [hasPrime] = useState(Math.random() < 0.5);
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

  return (
    <div className="flex flex-col relative m-5 p-10 bg-white z-30 min-w-[250px] ">
      <div className="flex flex-col justify-between h-full ">
        <p className="absolute top-2 right-2 text-xs text-gray-500 italic">
          {category}
        </p>
        <img className="w-[200px] h-[200px]" src={image} alt="" />

        <p className="my-3 font-bold">{title}</p>

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
        <button className="w-full button " onClick={addItemToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};


export default SearchProducts;
