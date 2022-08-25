import React from 'react';
import Dribble from "../asset/icons/dribble-logo.svg";
import Instagram from "../asset/icons/instagram-logo.svg";
import Behance from "../asset/icons/behance-logo.svg";
import Twitter from "../asset/icons/twitter-logo.svg";

const Footer = () => {
  return (
    <div className='w-full  bg-black text-white xs:p-6 sm:p-16' id='footer'>
        <div className='xs:mx-0 sm:mx-10 w-full flex sm:flex-row xs:flex-col sm:justify-between'>
            <div className='flex flex-col content-between xs:w-6/6 sm:w-3/12'>
                <div className='text-3xl font-normal'>Freela</div>
                <div className='mt-2 text-base font-light'>Freela, where freelance meets ease of funds management</div>
                <div className='w-36 mt-2 flex flex-row justify-between'>
                    <img src={Dribble} alt="dribble" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Behance} alt="behance" />
                    <img src={Twitter} alt="twitter"/>
                </div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:w-2/12 sm:mt-0 flex flex-col content-between'>
                <div className='text-2xl font-normal'>Products</div>
                <div className='mt-2 text-base font-light'>Save</div>
                <div className='mt-2 text-base font-light'>Cards</div>
                <div className='mt-2 text-base font-light'>Loans</div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:w-2/12 sm:mt-0 flex flex-col content-between'>
                <div className='text-2xl font-normal'>Our Service</div>
                <div className='mt-2 text-base font-light'>FAQ</div>
                <div className='mt-2 text-base font-light'>Investing</div>
                <div className='mt-2 text-base font-light'>Fund Management</div>
                <div className='mt-2 text-base font-light'>Help Center</div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:w-3/12 sm:mt-0 flex flex-col content-between'>
                <div className='text-2xl font-normal'>Location</div>
                <div className='mt-2 text-base font-light'>1, Nike Art Gallery Road, Lekki, Lagos</div>
                <div className='mt-2 text-base font-light'>hi@freela.com</div>
                <div className='mt-2 text-base font-light'>0800 1000 200</div>
            </div>
        </div>
    </div>
  )
}

export default Footer