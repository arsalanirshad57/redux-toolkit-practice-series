import React, { useState, useEffect } from 'react'
import Button from '../../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
import { removeProduct } from '../../redux/slices/add-to-cart-slice'


const Cart = () => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const orders = useSelector(state => state.addToCartSlice.orderProducts)
  const dispatch = useDispatch()
  const totalPrice = selectedProducts?.reduce((acc, item) => acc + item?.price, 0)

  console.log(totalPrice, 'totalPrice');

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id))
  }


  useEffect(() => {
    setSelectedProducts(orders)
  }, [orders]);

  return (
    <div className=" flex flex-col gap-10 py-10 px-6 text-2xl font-semibold">
      <h1 className="">Shopping Cart</h1>
      {
        selectedProducts.length > 0 ? (

          <div className='flex flex-col gap-5 lg:flex-row justify-start w-full'>
            <div className="w-full flex flex-col gap-5">
              {
                selectedProducts?.map(product => (
                  <div key={product?.id} className="relative bg-gray-50 rounded-md flex flex-col sm:flex-row  gap-5 p-4 ">
                    <div className=" w-full sm:w-56 bg-neutral-200 rounded-lg p-1 ">
                      <img src={product?.image} alt={product?.title} className=' mx-auto w-56 h-60  mix-blend-multiply ' />
                    </div>
                    <div className="w-fit">
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">{product?.title}</p>
                        <Icon icon={'akar-icons:cross'} onClick={() => handleRemoveProduct(product?.id)} className=' absolute sm:block top-1 right-1 w-6 h-6 hover:bg-gray-300 bg-gray-200 rounded-full p-1 cursor-pointer' />
                      </div>
                      <p className="text-lg font-medium ">${Math.round(product?.price)}</p>
                      <p className=" text-sm sm:text-base font-normal">{product?.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className=" w-full lg:w-[500px] h-fit flex flex-col gap-5 bg-white rounded-lg shadow-lg px-3 py-5 border ">
              <h2 className='text-xl font-medium border-b border-gray-200 pb-4'>Order Summary</h2>
              <div className="flex items-center justify-between">
                <p className="text-base">Order Total </p>
                <p className="text-base">${Math.round(totalPrice)}</p>
              </div>
              <Button icon={false} className='w-full justify-center !py-3'>Checkout</Button>
            </div>
          </div>
        ) : (
          <p className="text-base font-medium text-center h-screen mt-36 ">No Item in Cart</p>
        )
      }
    </div>
  )
}

export default Cart