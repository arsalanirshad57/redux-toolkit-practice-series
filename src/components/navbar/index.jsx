import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navActive, setNavActive] = useState(1)
  const orders = useSelector(state => state.addToCartSlice.orderProducts)

  const nav = [
    { id: '1', name: 'Home', link: '/' },
    { id: '2', name: 'Products', link: '/products' },
    { id: '3', name: 'About', link: '/about' },
    { id: '4', name: 'Contact', link: '/contact' },
  ]

  return (
    <div className=' flex justify-between items-center w-full px-6 py-4 shadow-md  '>
      <Link to={'/'}>
        <h1 className='text-2xl font-semibold grow '>Store</h1>
      </Link>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-5">
          {
            nav?.map(item => (
              <Link to={item?.link} key={item?.id} className={` font-medium ${navActive == item?.id ? 'text-blue-600' : ''}`} onClick={() => setNavActive(item?.id)}>{item?.name}</Link>
            )) 
          }
        </div>
        <div className="">
          <Icon icon={'mingcute:menu-fill'} className='w-6 h-6 text-black flex md:hidden ' />
        </div> 

        <Link to={'/cart'} className="relative w-full cursor-pointer" onClick={() => setNavActive(5)}>
          <span className={` absolute flex justify-center items-center -top-2 left-3 w-[22px] !h-[22px] text-sm  text-white px-1.5 pt-[1px] rounded-full ${navActive == 5 ? "bg-blue-600" : "bg-black "}`}>{orders?.length}</span>
          <Icon icon={'mdi:cart'} className={`w-7 h-7 ${navActive == 5 ? 'text-black' : 'text-blue-600'} `} />
        </Link> 
      </div> 
    </div>
  )
}

export default Navbar 