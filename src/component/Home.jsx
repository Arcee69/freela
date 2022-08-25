import React from 'react';
import Play from "../asset/icons/play-circle.png";
import Abstract from "../asset/icons/abstract.png";
import Adidas from "../asset/icons/adidas.png";
import Airbnb from "../asset/icons/airbnb.png";
import Dribble from "../asset/icons/dribble.png";
import Adobe from "../asset/icons/adobe.png";

const Home = () => {
  return (
    <div className='mb-20'>
      <div className='w-full flex flex-row md:justify-center md:items-center mt-12'>
        <div className=' text-center '>
          <div className='font-bold sm:text-5xl xs:text-xl text-center sm:mt-8 xs:mt-2'>
            Get convenience of managing <br />and transacting with Freela
          </div>
          <p className='text-xs sm:hidden text-center mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident eius ex numquam ducimus 
            quaerat eligendi, ut eaque, earum iusto magni natus deserunt!  Quo consequatur, 
            quae ab vero facere pariatur laborum.
          </p>
          <p className='text-lg xs:hidden sm:flex text-center mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident eius ex numquam ducimus <br />
            quaerat eligendi, ut eaque, earum iusto magni natus deserunt!  Quo consequatur, <br />
            quae ab vero facere pariatur laborum.
          </p>
          <div className='flex flex-row justify-center'>
            <button className='xs:w-24 xs:text-xs sm:text-sm xs:p-1 sm:w-32 m-5 bg-black text-white sm:p-2 rounded'>Get Started</button>
            <button className=' flex flex-row m-5 bg-white p-2 items-center rounded border-gray-900 outline-black'>
              <img src={Play} alt="play" className='m-1 ' /> 
              <p className='text-black sm:text-sm xs:text-xs m-1'>Watch Demo</p>
            </button>
          </div>
          <div className='xs:mt-10 sm:mt-20'>
            <p className='text-bold text-2xl font-normal m-5'>
              Over 21K companies around the world trust us wholeheartedly
            </p>
          </div>
         
        </div>
      </div>
      <div className='sm:hidden xs:mx-0 flex flex-row justify-between items-center mt-8'>
        <div className='xs:w-14'><img src={Abstract} alt='abstract'/></div> 
        <div className='xs:w-10'><img src={Adidas} alt='adidas'/></div>
        <div className='xs:w-10'><img src={Adobe} alt='adobe' /></div>
        <div className='xs:w-14'><img src={Airbnb} alt='airbnb' /></div>
        <div className='xs:w-14 '><img src={Dribble} alt='dribble'  /></div>
      </div>
                        {/* Large Devices */}
      <div className='mx-40 xs:hidden sm:flex flex-row justify-between items-center mt-8'>
        <div className=''><img src={Abstract} alt='abstract'/></div> 
        <div className=''><img src={Adidas} alt='adidas'/></div>
        <div className=''><img src={Adobe} alt='adobe' /></div>
        <div className=''><img src={Airbnb} alt='airbnb' /></div>
        <div className=''><img src={Dribble} alt='dribble'  /></div>
      </div>
    </div>
  )
}

export default Home