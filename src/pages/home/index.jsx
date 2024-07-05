import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/slices/products-slice/api-function'
import ProductCard from '../../components/product-card'
import { Icon } from '@iconify/react'

const Home = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state?.productsSlice)

  useEffect(() => {
    dispatch(getAllProducts())
  }, []);

  if (state?.isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center pb-20">
        <Icon icon={'ph:spinner-bold'} className=' animate-spin !w-16 !h-16 !text-blue-600' />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-10 px-6 py-10'>
      <h1 className='!text-3xl font-semibold'>Products</h1>
      <section className="flex gap-4 flex-wrap justify-between items-start">
        {
          state && state?.products.map((item) => (
            <ProductCard data={item} />
          ))
        }
      </section>
    </div>
  )
}

export default Home 