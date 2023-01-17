import React from 'react'
import { useSelector } from "react-redux";
import { selectInput } from "./features/basketSlice";
import SearchProducts from './SearchProducts';

const SearchProductFeed = ({ products }) => {
  const input = useSelector(selectInput);

  return (
    <>
      <div className="grid md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {products
          .filter(
            (item) =>
              item.title.toLowerCase().includes(input) ||
              item.category.toLowerCase().includes(input)
          )
          .map(({ id, title, image, rating, description, category, price }) => (
            <SearchProducts
              key={id}
              id={id}
              title={title}
              image={image}
              description={description}
              category={category}
              price={price}
              rating={rating.rate}
            />
          ))}
              </div>
    </>
  );
};


export default SearchProductFeed