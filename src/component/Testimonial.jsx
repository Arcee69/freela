import React from 'react';
import Img from "../asset/images/img.jpg"

const Testimonial = () => {
  return (
    <div className='mb-20'>
        <div className='flex flex-row justify-center'>
            <div className=''>
                <p className='text-center font-normal text-2xl text-gray-400 mt-16'>Testimonials</p>
                <p className='font-bold text-4xl mt-4'>What our client have said about Freela</p>
            </div>
        </div>
        <div className='mt-16'>
            <div className='flex flex-row justify-center'>
                <div className='w-1/3 m-5 rounded shadow-md p-5'>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Commodi, consequuntur error. Perspiciatis ducimus, 
                        cum ex distinctio magnam architecto! Ducimus sed quod rerum et. 
                        Corrupti provident soluta velit? Hic, ad illo.
                    </p>
                    <div className='flex flex-row mt-3'>
                        <div><img src={Img} alt="image" /></div>
                        <div className='mx-4'>
                            <p className='font-semibold'>Raymond Reddington</p>
                            <p className='font-normal text-base text-gray-400'>CEO Blacklist Corp</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 m-5 rounded shadow-md p-5'>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Commodi, consequuntur error. Perspiciatis ducimus, 
                        cum ex distinctio magnam architecto! Ducimus sed quod rerum et. 
                        Corrupti provident soluta velit? Hic, ad illo.
                    </p>
                    <div className='flex flex-row mt-3'>
                        <div><img src={Img} alt="image" /></div>
                        <div className='mx-4'>
                            <p className='font-semibold'>Raymond Reddington</p>
                            <p className='font-normal text-base text-gray-400'>CEO Blacklist Corp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <div className='w-1/3 m-5 rounded shadow-md p-5'>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Commodi, consequuntur error. Perspiciatis ducimus, 
                        cum ex distinctio magnam architecto! Ducimus sed quod rerum et. 
                        Corrupti provident soluta velit? Hic, ad illo.
                    </p>
                    <div className='flex flex-row mt-3'>
                        <div><img src={Img} alt="image" /></div>
                        <div className='mx-4'>
                            <p className='font-semibold'>Raymond Reddington</p>
                            <p className='font-normal text-base text-gray-400'>CEO Blacklist Corp</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 m-5 rounded shadow-md p-5'>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Commodi, consequuntur error. Perspiciatis ducimus, 
                        cum ex distinctio magnam architecto! Ducimus sed quod rerum et. 
                        Corrupti provident soluta velit? Hic, ad illo.
                    </p>
                    <div className='flex flex-row mt-3'>
                        <div><img src={Img} alt="image" /></div>
                        <div className='mx-4 '>
                            <p className='font-semibold'>Raymond Reddington</p>
                            <p className='font-normal text-base text-gray-400'>CEO Blacklist Corp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial