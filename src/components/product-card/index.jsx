import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import ProductModal from '../product-modal';
import { Icon } from '@iconify/react';
import { addToCart } from '../../redux/slices/add-to-cart-slice';

const ProductCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    dispatch(addToCart(product));
  };

  return (
    <div className='relative group w-[250px] border rounded-lg overflow-hidden border-gray-200 p-2 shadow-md bg-white cursor-pointer'>
      <div className="relative">
        <img src={data?.image} alt={data?.title} className='w-60 h-40 object-contain' />
        <span className='absolute top-0 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full'>{data?.category}</span>
      </div>
      <div className="mt-4 mb-2">
        <p className="text-sm font-medium">{data?.title}</p>
        <p className="text-[13px] my-1 truncate">{data?.description}</p> 
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">Price: <span className='font-semibold'>${Math.round(data?.price)}</span></p>
        <Button icon={true} onClick={() => handleAddToCart(data)} isloading={isLoading} className={'!w-36 justify-center'}>Add to Cart</Button>
      </div>
      <span className="bg-white rounded-full px-1 py-0.5 absolute top-1 right-1 z-30 hidden group-hover:flex shadow-md ">
        <Icon icon={'ph:eye'} className='w-5 h-5 text-black hover:text-blue-600' onClick={() => setIsOpen(!isOpen)} />
      </span>
      <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
    </div>
  );
};

export default ProductCard;
