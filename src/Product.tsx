import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  category: string
  id: number | string
  rating: number
  price: number
  image: string
}

const Product: React.FC<Props> = ({
  title,
  category,
  id,
  rating,
  image,
  price,
}) => {
  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <Link
      to={`details/${id}`}
      className="flex flex-col relative m-5 p-10 bg-white z-30 min-w-[250px] rounded-lg transform hover:scale-105 active:scale-100 transition "
    >
      <div className="flex flex-col justify-between h-full ">
        <p className="absolute top-2 right-2 text-xs text-gray-500 italic">
          {category}
        </p>
        <p className="my-3  line-clamp-1 font-bold">{title}</p>
        <img className="w-[200px] h-[200px]" src={image} alt="" />
        <div>
          {Array(Math.round(rating))
            .fill(undefined)
            .map((_, index) => (
              <StarIcon key={index} className="text-yellow-400 w-2" />
            ))}
        </div>
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
      </div>
    </Link>
  )
}

export default Product
