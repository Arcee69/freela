import React from 'react';
import Group1 from "../asset/icons/Group1.png";
import Line1 from "../asset/icons/Line1.png";
import Group2 from "../asset/icons/Group2.png";
import Line2 from "../asset/icons/Line2.png";
import Group3 from "../asset/icons/Group3.png";

const Demo = () => {
  return (
    <div className='mb-20 bg-gray-200 h-96' id='works'>
        <div className='flex flex-row justify-center'>
            <div className=''>
                <p className='text-center font-normal sm:text-2xl xs:text-xl text-gray-400 mt-16'>Demo</p>
                <p className='font-normal sm:text-4xl xs:text-2xl mt-4'>How does it work?</p>
            </div>
        </div>
        <div className='flex flex-row justify-center xs:mx-4 xs:my-10 sm:my-16'>
            <div className='flex-col content-center'>
                <div className='sm:mx-6 xs:mx-1 xs:w-14 sm:w-32 sm:flex sm:justify-center'><img src={Group1} alt='img' /></div>
                <div className='font-bold xs:w-30 xs:text-xs sm:text-base sm:text-center text-black'>Create an account</div>
                <div className='font-normal sm:text-center sm:text-base xs:text-xs text-gray-400'>Sign up on Freela</div>
            </div>
            <div className='sm:my-10 xs:my-7 xs:w-32 sm:w-56'> <img src={Line1} alt="Line" /></div>
            <div className='flex-col content-center'>
                <div className='sm:mx-6 xs:mx-1 xs:w-14 sm:w-32 sm:flex sm:justify-center'><img src={Group2} alt='img' /></div>
                <div className='font-bold xs:w-30 xs:text-xs sm:text-base sm:text-center text-black'>Create an account</div>
                <div className='font-normal sm:text-center sm:text-base xs:text-xs text-gray-400'>Sign up on Freela</div>
            </div>
            <div className='sm:my-10 xs:my-7 xs:w-32 sm:w-56'> <img src={Line2} alt="Line" /></div>
            <div className='flex-col content-center'>
                <div className='sm:mx-6 xs:mx-1 xs:w-14 sm:w-32 sm:flex sm:justify-center'><img src={Group3} alt='img' /></div>
                <div className='font-bold xs:w-30 xs:text-xs sm:text-base sm:text-center text-black'>Create an account</div>
                <div className='font-normal sm:text-center sm:text-base xs:text-xs text-gray-400'>Sign up on Freela</div>
            </div>
        </div>
    </div>
  )
}

export default Demo