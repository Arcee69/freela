import React, { useState } from 'react';
import Open from "../asset/icons/Open.svg";
import Close from "../asset/icons/Close.svg";
import Laptop from "../asset/images/Laptop.svg";
import Windows from "../asset/icons/windows.svg";
import Apple from "../asset/icons/apple.svg";
import Android from "../asset/icons/android.svg";

const Faq = () => {
    const [open, setOpen] = useState(false);
    const [free, setFree] = useState(false);
    const [payment, setPayment] = useState(false);

    const handleToggle = () => setOpen(!open);
    const handleToggleFree = () => setFree(!free);
    const handleTogglePayment = () => setPayment(!payment);
    

  return (
    <div className='mb-20'>
        <div className='flex flex-row justify-center'>
            <div className=''>
                <p className='text-center font-normal text-2xl text-gray-400 mt-16'>
                    Frequently Asked Questions
                </p>
                <div className=' w-full flex flex-row justify-center'>
                    <p className='w-2/3 font-normal text-center text-4xl mt-4'>
                        Some of the re-occurring questions asked about Freela
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-10 w-[48%]  m-auto flex flex-col justify-between'>
            <div className="flex flex-col items-center border rounded p-4 text-gray-700 cursor-pointer">
                <div className='flex flex-row w-full items-center'>
                    <h3 className="flex-1 font-mono font-semibold text-sm">What is Freela?</h3>
                    <div>
                        <img src={`${open ? Open : Close }`} alt="close" onClick={handleToggle}/>
                    </div>
                </div>
                {open ? (
                    <div className=" mt-2 font-normal text-NEUTRAL-_3000">
                        Yes, you can try us for free for 30 days. If you want, we'll provide you with 
                        a free personalized 30-minute onboarding call to get you up and running as soon as possible.
                    </div> ) : null}    
            </div>

            <div className="mt-5 flex flex-col items-center border rounded p-4 text-gray-700 cursor-pointer">
                <div className='flex flex-row w-full items-center'>
                    <h3 className="flex-1 font-mono font-semibold text-sm">Is Freela free to use?</h3>
                    <div>
                        <img src={`${free ? Open : Close }`} alt="close" onClick={handleToggleFree}/>
                    </div>
                </div>
                {free ? (
                    <div className=" mt-2 font-normal text-NEUTRAL-_3000">
                        Yes, you can try us for free for 30 days. If you want, we'll provide you with 
                        a free personalized 30-minute onboarding call to get you up and running as soon as possible.
                    </div> ) : null}    
            </div>

            <div className="mt-5 flex flex-col items-center border rounded p-4 text-gray-700 cursor-pointer">
                <div className='flex flex-row w-full items-center'>
                    <h3 className="flex-1 font-mono font-semibold text-sm">How long does it take to receive payment?</h3>
                    <div>
                        <img src={`${payment ? Open : Close }`} alt="close" onClick={handleTogglePayment}/>
                    </div>
                </div>
                {payment ? (
                    <div className=" mt-2 font-normal text-NEUTRAL-_3000">
                        Yes, you can try us for free for 30 days. If you want, we'll provide you with 
                        a free personalized 30-minute onboarding call to get you up and running as soon as possible.
                    </div> ) : null}    
            </div>
        </div> 

        <div className='mt-5 flex flex-row justify-center'>
            <div className=''>
                <p className='text-center font-normal text-2xl text-gray-400 mt-16'>
                    Download
                </p>
                <div className=' w-full flex flex-row justify-center'>
                    <p className='w-3/3 font-normal text-center text-4xl mt-4'>
                        Ease of Freelancing, All in one platform
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-14'>
            <div className='flex flex-row justify-center'>
                <img src={Laptop} alt="laptop" />
            </div>
            <div className='flex flex-row justify-center'>
                <div className='border p-3 rounded-lg flex flex-row items-center bg-black text-white' >
                    <img src={Android} alt="android" className='w-'/>
                    <h6 className='text-xs ml-2'>Download on Playstore</h6>
                </div>
                <div className='border p-3 ml-2 rounded-lg flex flex-row items-center bg-black text-white'>
                    <img src={Apple} alt="apple" className='w-6'/>
                    <h6 className='text-xs ml-2'>Download on Appstore</h6>
                </div>
                <div className='border p-3 ml-2 rounded-lg flex flex-row items-center bg-black text-white'>
                    <img src={Windows} alt="windows" className='w-6' />
                    <h6 className='text-xs ml-2'>Download for Windows</h6>
                </div>
            </div>
        </div>

        <div className='mt-5 flex flex-row justify-center'>
            <div className=''>
                <p className='text-center font-normal text-2xl text-gray-400 mt-16'>
                    Subscribe to our Newsletter
                </p>
                <div className=' w-full flex flex-row justify-center'>
                    <p className='w-3/3 font-normal text-center text-4xl mt-4'>
                        Be up to date with our products and services
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-14 flex flex-row justify-center'>
            <div className='border-2 flex flex-row items-center justify-between rounded-md p-4 w-2/6'>
                <div className=''>
                    <input type="text" placeholder="Your email address" className='outline-none' autoComplete />
                </div>
                <button type='submit' className='w-36 p-2 rounded-lg text-sm bg-black text-white'>Subscribe</button>
            </div>
        </div>

    </div>
  )
}

export default Faq;