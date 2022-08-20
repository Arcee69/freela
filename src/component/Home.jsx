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
      <div className='w-full flex flex-row justify-center items-center mt-12'>
        <div className=' text-center '>
          <div className='font-bold text-5xl text-center  mt-8'>
            Get convenience of managing <br />and transacting with Freela
          </div>
          <p className='text-sm text-center mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident eius ex numquam ducimus <br />
            quaerat eligendi, ut eaque, earum iusto magni natus deserunt!  Quo consequatur, <br /> 
            quae ab vero facere pariatur laborum.
          </p>
          <div className='flex flex-row justify-center'>
            <button className='w-32 m-5 bg-black text-white p-2 rounded'>Get Started</button>
            <button className=' flex flex-row m-5 bg-white p-2 rounded border-gray-900 outline-black'>
              <img src={Play} alt="play" className='m-1' /> 
              <p className='text-black m-1'>Watch Demo</p>
            </button>
          </div>
          <div className='mt-20'>
            <p className='text-bold text-2xl font-normal m-5'>
              Over 21K companies around the world trust us wholeheartedly
            </p>
          </div>
         
        </div>
      </div>
      <div className='mx-40 flex flex-row justify-between mt-8'>
        <div className=''><img src={Abstract} alt='abstract'/></div> 
        <div className=''><img src={Adidas} alt='adidas'/></div>
        <div className=''><img src={Adobe} alt='adidas' /></div>
        <div className=''><img src={Airbnb} alt='airbnb' /></div>
        <div className=''><img src={Dribble} alt='dribble'  /></div>
      </div>

    </div>
  )
}

export default Home