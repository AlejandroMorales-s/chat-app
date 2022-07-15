import React from 'react';
import {AiOutlineClose, AiFillCheckCircle, AiFillInfoCircle, AiFillCloseCircle} from 'react-icons/ai';
import {MdError} from 'react-icons/md';

export default function Modal({type, title, desc, setShowingModal}) {
    const closeModal = () => setShowingModal(false);

    return (
        <>
            <div className={`modal-container sm:bottom-2 sm:left-2 dark:bg-darkBg dark:border-y-2 dark:border-r-2 shadow-containersShadow dark:border-r-gray-grayDark dark:border-y-gray-grayDark ${type}`}>
                {type === 'info' && <AiFillInfoCircle className='modal-icon text-blue w-[25px] h-[25px]' />}
                {type === 'warning' && <MdError className='modal-icon text-yellowModal w-[25px] h-[25px]' />}
                {type === 'success' && <AiFillCheckCircle className='modal-icon text-greenModal w-[25px] h-[25px]' />}
                {type === 'error' && <AiFillCloseCircle className='modal-icon text-red w-[25px] h-[25px]' />}
                <div>
                    <h2 className=' dark:text-white text-bold font-semibold'>{title}</h2>
                    <p className='dark:text-gray'>{desc}</p>
                </div>
                <AiOutlineClose onClick={() => closeModal()} className='modal-close-btn' />
            </div>
        </>
    )
}
