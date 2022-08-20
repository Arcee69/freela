import React from 'react';
import Shield from "../asset/icons/shield.png";
import Phone from "../asset/images/phone.png";

const Features = () => {
  return (
    <div className='mb-20 mt-20'>
        <div className='w-full flex flex-row justify-center items-center'>
            <div>
                <div className='font-normal text-2xl text-gray-500 text-center'>Core Features</div>
                <div className='font-normal text-4xl mt-4'>Specially designed for payments</div>
            </div>
        </div>
        <div className='flex flex-row justify-between mt-16 items-center mx-28 '>     
            <div className='w-1/5 flex flex-row'>
                <div className='w-1/3'>
                    <img src={Shield} alt="icon" />
                </div>
                <div className='ml-3'>
                    <div className='font-bold text-base'>Safety Guaranteed</div>
                    <div className='text-gray-500'>Freela is super secured so you don't need to worry about data privacy</div>
                </div>
            </div>
            <div className='w-1/5 flex flex-row'>
                <div className='w-1/3'>
                    <img src={Shield} alt="icon" />
                </div>
                <div className='ml-3'>
                    <div className='font-bold text-base'>No Extra Fees</div>
                    <div className='text-gray-500'>Freela is super secured so you don't need to worry about data privacy</div>
                </div>
            </div>
            <div className='w-1/5 flex flex-row'>
                <div className='w-1/3'>
                    <img src={Shield} alt="icon" />
                </div>
                <div className='ml-3'>
                    <div className='font-bold text-base'>Modern Cards</div>
                    <div className='text-gray-500'>Freela is super secured so you don't need to worry about data privacy</div>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-row justify-center mt-44 items-center'>
            <div className='w-1/3 mr-32'>
                <img src={Phone} alt="phone"  />
            </div>
            <div className='w-1/3 flex-col'>
                <div className='font-normal text-2xl text-gray-500'>Why choose us</div>
                <div className='mt-2 font-extrabold text-4xl'>Track your payment <br /> in the best possible <br /> way</div>
                <ul className='mt-5 list-disc'>
                    <li className='font-normal text-base text-justify text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio, ratione ipsam exercitationem laudantium cum quo, 
                    </li>
                    <li className='mt-2 font-normal text-base text-justify text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Harum dolor cum reprehenderit quos dignissimos tenetur 
                    </li>
                </ul>
                <button className='w-32 mt-8 bg-black text-white p-2 rounded'>Get Started</button>
            </div>
        </div>
        <div className='w-full flex flex-row justify-center mt-40 items-center'>
            <div className='w-1/3 flex-col'>
                <div className='font-normal text-2xl text-gray-500'>Why choose us</div>
                <div className='mt-2 font-extrabold text-4xl'>Track your payment <br /> in the best possible <br /> way</div>
                <ul className='mt-5 list-disc'>
                    <li className='font-normal text-base text-justify text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio, ratione ipsam exercitationem laudantium cum quo, 
                    </li>
                    <li className='mt-2 font-normal text-base text-justify text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Harum dolor cum reprehenderit quos dignissimos tenetur 
                    </li>
                </ul>
                <button className='w-32 mt-8 bg-black text-white p-2 rounded'>Get Started</button>
            </div>
            <div className='w-1/3 ml-32'>
                <img src={Phone} alt="phone"  />
            </div>
        </div>
    </div>
  )
}

export default Features