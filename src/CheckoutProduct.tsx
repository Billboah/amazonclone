import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from './features/basketSlice'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface Props {
  title: string
  description: string
  id: number | string
  image: string
  rating: number
  price: number
  hasPrime: unknown
  count: number
}
const CheckoutProduct: React.FC<Props> = ({
  title,
  description,
  id,
  image,
  rating,
  price,
  hasPrime,
  count,
}) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
      description: description,
      hasPrime: hasPrime,
    }
    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    dispatch(
      removeFromBasket({
        id: id,
      })
    )
  }

  return (
    <div className="flex flex-col items-center md:flex-row bg-white pl-[10px] pt-[10px] mt-20">
      <img className="w-[80px] md:w-[120px] h-[170px]" src={image} alt="" />
      <div className="md:ml-10 flex flex-col justify-between">
        <p className="mt-2 font-bold">{title}</p>
        <>
          <div>
            {Array(Math.round(rating))
              .fill(undefined)
              .map((_, index) => (
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
          <div className="my-[10px]">
            <span>Quantity:</span>
            <span className="font-bold ml-[5px]">
              <button
                disabled={count < 2}
                className={
                  count < 2
                    ? 'bg-gray-100 border rounded-sm border-gray-300 mr-1'
                    : 'border border-gray-300 rounded-sm hover:bg-gray-100 active:bg-gray-200 p-0 mr-1'
                }
                onClick={removeItemFromBasket}
              >
                <ArrowBackIosIcon className="!h-3  !p-0 !m-0" />
              </button>
              {count}

              <button
                className=" border rounded-sm border-gray-300 hover:bg-gray-100 active:bg-gray-200 p-0  ml-1"
                onClick={addItemToBasket}
              >
                <ArrowForwardIosIcon className="!h-3 !p-0 !m-0" />
              </button>
            </span>
          </div>
          {count === 1 && (
            <button
              className=" button w-[150px] md:w-[200px] mt-[10px]"
              onClick={removeItemFromBasket}
            >
              Remove item from cart
            </button>
          )}
        </>
      </div>
    </div>
  )
}

export default CheckoutProduct
