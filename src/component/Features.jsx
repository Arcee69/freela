import React from 'react';
import Shield from "../asset/icons/shield.png";
import Phone from "../asset/images/phone.png";

const Features = () => {
  return (
    <div className='mb-20 mt-20' id='features'>
        <div className='w-full flex flex-row justify-center items-center'>
            <div>
                <div className='font-normal text-2xl text-gray-500 text-center'>Core Features</div>
                <div className='font-normal xs:text-xl sm:text-4xl mt-4'>Specially designed for payments</div>
            </div>
        </div>
        <div className='flex flex-row justify-between xs:mt-5 xs:mx-auto sm:mt-16 sm:items-center sm:mx-28 '>     
            <div className='xs:w-2/6 sm:w-1/5 flex flex-row'>
                <div className='w-1/3 xs:mt-1 sm:mt-0'>
                    <img src={Shield} alt="icon" />
                </div>
                <div className='xs:ml-1 sm:ml-3'>
                    <div className='font-bold xs:text-xs sm:text-base'>Safety Guaranteed</div>
                    <div className='text-gray-500 xs:text-xs sm:text-sm'>Freela is super secured so you don't need to worry about data privacy</div>
                </div>
            </div>
            <div className='xs:w-2/6 sm:w-1/5 flex flex-row'>
                <div className='w-1/3 xs:mt-1 sm:mt-0'>
                    <img src={Shield} alt="icon" />
                </div>
                <div className='xs:ml-1 sm:ml-3'>
                    <div className='font-bold xs:text-xs sm:text-base'>No Extra Fees</div>
                    <div className='text-gray-500 xs:text-xs sm:text-sm'>Freela is super secured so you don't need to worry about data privacy</div>
                </div>
            </div>
            <div className='xs:w-2/6 sm:w-1/5 flex flex-row'>
                <div className='w-1/3 xs:mt-1 sm:mt-0'>
                    <img src={Shield} alt="icon" />
                </div>
                <div className='xs:ml-1 sm:ml-3'>
                    <div className='font-bold xs:text-xs sm:text-base'>Modern Cards</div>
                    <div className='text-gray-500 xs:text-xs sm:text-sm'>Freela is super secured so you don't need to worry about data privacy</div>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-row justify-center sm:mt-44 xs:mt-14 items-center'>
            <div className='w-1/3 xs:mr-6 sm:mr-32'>
                <img src={Phone} alt="phone"  />
            </div>
            <div className='w-1/3 flex-col'>
                <div className='font-normal sm:text-2xl xs:text-base text-gray-500'>Why choose us</div>
                <div className='mt-2 sm:hidden xs:font-bold xs:text-sm'>Track your payment in the best possible way</div>
                <div className='mt-2 font-extrabold sm:text-4xl xs:hidden sm:flex'>Track your payment <br /> in the best possible <br /> way</div>
                <ul className='mt-5 list-disc'>
                    <li className='font-normal xs:text-xs sm:text-base sm:text-justify text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio, ratione ipsam exercitationem laudantium cum quo, 
                    </li>
                    <li className='mt-2 font-normal xs:text-xs sm:text-base sm:text-justify text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Harum dolor cum reprehenderit quos dignissimos tenetur 
                    </li>
                </ul>
                <button className='w-32 mt-8 bg-black text-white p-2 rounded'>Get Started</button>
            </div>
        </div>
        <div className='w-full flex flex-row justify-center xs:mt-14 sm:mt-40 items-center'>
            <div className='w-1/3 flex-col'>
                <div className='font-normal sm:text-2xl xs:text-base text-gray-500'>Why choose us</div>
                <div className='mt-2 sm:hidden xs:font-bold xs:text-sm'>Track your payment in the best possible way</div>
                <div className='mt-2 font-extrabold sm:text-4xl xs:hidden sm:flex'>Track your payment <br /> in the best possible <br /> way</div>
                <ul className='mt-5 list-disc'>
                    <li className='font-normal xs:text-xs sm:text-base sm:text-justify text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio, ratione ipsam exercitationem laudantium cum quo, 
                    </li>
                    <li className='mt-2 font-normal xs:text-xs sm:text-base sm:text-justify text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Harum dolor cum reprehenderit quos dignissimos tenetur 
                    </li>
                </ul>
                <button className='w-32 mt-8 bg-black text-white p-2 rounded'>Get Started</button>
            </div>
            <div className='w-1/3 xs:ml-6 sm:ml-32'>
                <img src={Phone} alt="phone"  />
            </div>
        </div>
    </div>
  )
}

export default Features