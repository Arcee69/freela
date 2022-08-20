import React from 'react';
import Group1 from "../asset/icons/Group1.png";
import Line1 from "../asset/icons/Line1.png";
import Group2 from "../asset/icons/Group2.png";
import Line2 from "../asset/icons/Line2.png";
import Group3 from "../asset/icons/Group3.png";

const Demo = () => {
  return (
    <div className='mb-20 bg-gray-200 h-96'>
        <div className='flex flex-row justify-center'>
            <div className=''>
                <p className='text-center font-normal text-2xl text-gray-400 mt-16'>Demo</p>
                <p className='font-normal text-4xl mt-4'>How does it work?</p>
            </div>
        </div>
        <div className='flex flex-row justify-center my-16'>
            <div className='flex-col content-center'>
                <div className='mx-6'><img src={Group1} alt='img' /></div>
                <div className='font-bold text-base text-black'>Create an account</div>
                <div className='font-normal text-center text-base text-gray-400'>Sign up on Freela</div>
            </div>
            <div className='my-10'> <img src={Line1} alt="Line" /></div>
            <div className='flex-col content-center'>
                <div className='mx-6'><img src={Group2} alt='img' /></div>
                <div className='font-bold text-base text-black'>Create an account</div>
                <div className='font-normal text-center text-base text-gray-400'>Sign up on Freela</div>
            </div>
            <div className='my-10'> <img src={Line2} alt="Line" /></div>
            <div className='flex-col content-center'>
                <div className='mx-6'><img src={Group3} alt='img' /></div>
                <div className='font-bold text-base text-black'>Create an account</div>
                <div className='font-normal text-center text-base text-gray-400'>Sign up on Freela</div>
            </div>
        </div>
    </div>
  )
}

export default Demo