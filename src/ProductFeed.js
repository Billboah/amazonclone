import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectInput } from "./features/basketSlice";

const ProductFeed = ({ products }) => {
  const input = useSelector(selectInput);

  return (
    <>
      <div className="hidden md:grid md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {products
          .slice(0, 4)
          .filter(
            (item) =>
              item.title.toLowerCase().includes(input) ||
              item.category.toLowerCase().includes(input)
          )
          .map(({ id, title, image, rating, description, category, price }) => (
            <Product
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
        <img
          src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
          className={`md:col-span-full ${input && "hidden"}`}
          alt=""
        />
        <div className={`md:col-span-2 ${input && "md:col-span-1"}`}>
          {products
            .slice(4, 5)
            .filter(
              (item) =>
                item.title.toLowerCase().includes(input) ||
                item.category.toLowerCase().includes(input)
            )
            .map(
              ({ id, title, image, rating, description, category, price }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                  category={category}
                  price={price}
                  rating={rating.rate}
                />
              )
            )}
        </div>
        {products
          .slice(5, products.lenght)
          .filter(
            (item) =>
              item.title.toLowerCase().includes(input) ||
              item.category.toLowerCase().includes(input)
          )
          .map(({ id, title, image, rating, description, category, price }) => (
            <Product
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
      <div className="md:hidden  ">
        <div
          className={`flex overflow-x-scroll scrollbar-hide ${input && "grid"}`}
        >
          {products
            .slice(0, 4)
            .filter(
              (item) =>
                item.title.toLowerCase().includes(input) ||
                item.category.toLowerCase().includes(input)
            )
            .map(
              ({ id, title, image, rating, description, category, price }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                  category={category}
                  price={price}
                  rating={rating.rate}
                />
              )
            )}
        </div>
        <img
          src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
          className={`md:col-span-full ${input && "hidden"}`}
          alt=""
        />
        {products
          .slice(4, 8)
          .filter(
            (item) =>
              item.title.toLowerCase().includes(input) ||
              item.category.toLowerCase().includes(input).input
          )
          .map(({ id, title, image, rating, description, category, price }) => (
            <Product
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
        <div
          className={`flex overflow-x-scroll scrollbar-hide${input && "grid"}`}
        >
          {products
            .slice(8, 14)
            .filter(
              (item) =>
                item.title.toLowerCase().includes(input) ||
                item.category.toLowerCase().includes(input)
            )
            .map(
              ({ id, title, image, rating, description, category, price }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                  category={category}
                  price={price}
                  rating={rating.rate}
                />
              )
            )}
        </div>
        {products
          .slice(14, products.lenght)
          .filter(
            (item) =>
              item.title.toLowerCase().includes(input) ||
              item.category.toLowerCase().includes(input)
          )
          .map(({ id, title, image, rating, description, category, price }) => (
            <Product
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

export default ProductFeed;
