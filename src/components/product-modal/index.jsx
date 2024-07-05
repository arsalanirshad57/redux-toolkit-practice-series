import React, { useState, useEffect } from 'react';
import Modal from '../modal'
import Button from '../button'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/add-to-cart-slice';

const ProductModal = ({ isOpen, setIsOpen, data }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = (product) => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
        dispatch(addToCart(product));
    };

    const onClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={data?.category} contentClass={'flex flex-col sm:flex-row h-full gap-4 w-full'}>
            <div className=" w-full sm:w-56 bg-neutral-100 rounded-lg p-1 ">
                <img src={data?.image} alt={data?.title} className=' mx-auto w-56 h-60  mix-blend-multiply ' />
            </div>
            <div className='h-full w-full flex flex-col justify-between sm:w-2/3 self-start py-3'>
                <div className="h-full">
                    <h1 className=' text-lg font-medium'>{data?.title}</h1>
                    <p className='text-[13px]'>{data?.description}</p>
                </div>
                <div className="flex items-start justify-between mt-3 ">
                    <p className="font-medium">Price:  <span className='font-semibold'>${Math.round(data?.price)}</span></p>
                    <Button icon={true} onClick={() => handleAddToCart(data)} isloading={isLoading} className={'!w-36 justify-center'}>Add to Cart</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ProductModal