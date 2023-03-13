import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToBasket, selectProducts } from './features/basketSlice'
import StarIcon from '@mui/icons-material/Star'

interface Item {
  title: string
  category: string
  description: string
  id: number | string
  rating: number
  price: number
  image: string
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const products = useSelector(selectProducts)
  const item = products.find((item: Item) => item.id === parseInt(id))
  const [hasPrime] = useState(Math.random() < 0.5)
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      rating: item.rating.rate,
      description: item.description,
      hasPrime: hasPrime,
    }
    dispatch(addToBasket(product))
  }

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="flex flex-col md:flex-row bg-white py-[20px] px-[15px]">
      <img className="w-[150px] md:w-[200px] h-auto" src={item.image} alt="" />
      <div className="md:ml-10 flex flex-col justify-between">
        <p className="my-2 font-bold">{item.title}</p>
        <>
          <div>
            {Array(Math.round(item.rating.rate))
              .fill(undefined)
              .map((_, index) => (
                <StarIcon key={index} className="text-yellow-400 w-2" />
              ))}
          </div>
          <p className="text-xs  my-2">{item.description}</p>
          <p className="">
            <small>$</small>
            <strong>{item.price}</strong>
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
        </>
      </div>
      <div className="flex flex-col mb-[30px] mx-[10px] justify-end">
        <button
          className="w-[150px]  button mb-[10px]"
          onClick={addItemToBasket}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
