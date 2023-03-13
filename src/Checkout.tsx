import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from './CheckoutProduct'
import { selectItems, selectUserName } from './features/basketSlice'

interface Item {
  id: number
  count: number
  key: number
  title: string
  image: string
  price: number
  rating: number
  description: string
  hasPrime: any
}

const Checkout: React.FC = () => {
  const basket = useSelector(selectItems)
  const userName = useSelector(selectUserName)

  const convert = (arr: any[]) => {
    const res: { [index: string]: any } = {}
    arr.forEach((obj) => {
      const key = `${obj.id}}`
      if (!res[key]) {
        res[key] = { ...obj, count: 0 }
      }
      res[key].count += 1
    })
    return Object.values(res)
  }
  const newBasket = convert(basket)

  //calculating the total price
  const getBasketTotal = basket?.reduce(
    (total: number, basket: { price: number }) => {
      return basket.price + total
    },
    0
  )

  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row p-[20px] min-w-[380px]">
      <div className="bg-white pr-[10px]">
        <img
          className="w-full mb-[10px]"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="bg-white p-5">
          {basket?.length === 0 ? (
            <div>
              <h2 className="font-bold text-lg">
                Your Shopping basket is empty
              </h2>
              <p>
                You have no item in your basket. To buy one or more items, click
                &quot;Add to basket&quot; next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="font-bold text-lg border-b-gray-200 border-b-2 pb-[10px]">
                Your Shopping basket
              </h2>
              {newBasket.map((item: Item) => (
                <CheckoutProduct
                  count={item.count}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  description={item.description}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {basket.length > 0 && (
        <div className="w-full h-fit lg:w-[700px]">
          <div className="flex flex-col justify-space-between p-[20px] bg-white border-solid border-2 border-slate-100 my-[10px] md:mx-[10px]">
            <>
              <p>
                Subtotal ({basket.length} items): <small>$</small>
                <strong> {getBasketTotal.toFixed(2)}</strong>
              </p>
              <small className="flex items-center">
                <input type="checkbox" className="mr-5px" />
                This order contains gift
              </small>
            </>
            <button
              role="link"
              disabled={!userName}
              className={`button mt-[10px] ${
                !userName &&
                'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed active:from-gray-300 active:to-gray-500 focus:ring-0'
              }`}
            >
              {userName ? 'Proceed to checkout' : 'Sign in to checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
