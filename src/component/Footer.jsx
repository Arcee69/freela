import React from 'react';
import Dribble from "../asset/icons/dribble-logo.svg";
import Instagram from "../asset/icons/instagram-logo.svg";
import Behance from "../asset/icons/behance-logo.svg";
import Twitter from "../asset/icons/twitter-logo.svg";

const Footer = () => {
  return (
    <div className='w-full  bg-black text-white p-16'>
        <div className='mx-10 w-full flex flex-row justify-between'>
            <div className='flex flex-col content-between w-3/12'>
                <div>Freela</div>
                <div className='mt-2'>Freela, where freelance meets ease of funds management</div>
                <div className='w-36 mt-2 flex flex-row justify-between'>
                    <img src={Dribble} alt="dribble" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Behance} alt="behance" />
                    <img src={Twitter} alt="twitter"/>
                </div>
            </div>
            <div className='w-2/12 flex flex-col content-between'>
                <div>Products</div>
                <div className='mt-2'>Save</div>
                <div className='mt-2'>Cards</div>
                <div className='mt-2'>Loans</div>
            </div>
            <div className='w-2/12 flex flex-col content-between'>
                <div>Our Service</div>
                <div className='mt-2'>FAQ</div>
                <div className='mt-2'>Investing</div>
                <div className='mt-2'>Fund Management</div>
                <div className='mt-2'>Help Center</div>
            </div>
            <div className='w-3/12 flex flex-col content-between'>
                <div>Location</div>
                <div className='mt-2'>1, Nike Art Gallery Road, Lekki, Lagos</div>
                <div className='mt-2'>hi@freela.com</div>
                <div className='mt-2'>0800 1000 200</div>
            </div>
        </div>
    </div>
  )
}

export default Footer