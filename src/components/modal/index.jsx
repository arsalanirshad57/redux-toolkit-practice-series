import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children, title, className, titleClass, contentClass }) => {

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside) 
        }

    }, [isOpen, onClose]);

    if (!isOpen) return null; 

    return (
        <div className="fixed  inset-0 !z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div ref={modalRef} className={` relative w-full sm:max-w-[620px]  bg-white md:rounded-2xl shadow dark:bg-brownish_black dark:border dark:border-neutral-800   ${className}`}>
                <div className={` flex items-center justify-between px-4 sm:px-5 py-3  border-b dark:border-neutral-800 border-gray-200 font-semibold uppercase ${titleClass} `}>
                    <p className={"text-lg"}>{title}</p>
                    <Icon icon={'akar-icons:cross'} className={'!w-7 !h-7 p-1.5 rounded-full hover:bg-gray-100'} onClick={() => onClose()} />
                </div>
                <div className={`flex justify-between items-start  h-full flex-row p-5 sm:p-6 ${contentClass} `}>
                    {children}
                </div> 
            </div> 
        </div>
    );
};

export default Modal;
