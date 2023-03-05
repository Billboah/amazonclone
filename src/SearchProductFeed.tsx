import React from 'react'
import { useSelector } from "react-redux";
import { selectInput } from './features/basketSlice';
import Product from './Product';

interface Props {
  products:any
}
interface Items{
  id:number;
  title:string;
  image:string;
  description:string;
  category:string;
  price:number
  rating:{rate:number};
}
const SearchProductFeed: React.FC<Props> = ({ products }) => {
  const input = useSelector(selectInput);
  const filtered = products
  .filter(
    (item:{title: string; category:string}) =>
      item.title.toLowerCase().includes(input) ||
      item.category.toLowerCase().includes(input)
  )
  if(!filtered.length){return<div className='font-bold text-3xl text-center md:mt-40 w-full'>No Result found</div>}

  return (
      <div className="grid md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {filtered
          .map((item: Items) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              category={item.category}
              price={item.price}
              rating={item.rating.rate}
            />
          ))}
              </div>
  
  );
};


export default SearchProductFeed