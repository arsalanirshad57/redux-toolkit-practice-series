import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({ children, className, icon, isloading, ...others }) => {
    return (
        <button className={` flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 rounded-full text-white  ${isloading ? 'bg-opacity-70' : ''} ${className}`} {...others}>
            {isloading ? (
                <Icon icon={'ph:spinner-bold'} className='text-white w-5 h-5 animate-spin' />
            ) : (
                <>
                    {children}
                    {
                        icon && (
                            <Icon icon={'mdi:cart'} className='text-white w-5 h-5' />
                        )
                    }
                </>
            )
            }
        </button>
    )
}

export default Button