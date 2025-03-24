import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className=' mx-6 md:mx-[80px] mb-24'>
        <div className='max-w-72 mx-auto'>
            <Header title={"Get In Touch With Us"}/>
        </div>
        <div className=' mb-15'>
            <Image src='/assets/contact_us.png' alt='contact us' width={1200} height={450} />
        </div>
        <section className = 'flex flex-col md:flex-row  gap-[106px] justify-between  '>
            <div className='flex flex-col space-y-5 md:max-w-[50%] text-2xl md:text-[40px]'>
                <h1 className=' '>

                Address: 10, Shabiola Avenue, Maryland Crescent. Lagos State, Nigeria.
                </h1>
                <hr />
                <h1 className=''>Phone: +234 709 8765 432 </h1>
                <hr />
                <h1 className=''>
                Email: info@perennia.com
                </h1>
            </div>
            <div className="space-y-5 md:max-w-[50%]">
                <p className='font-medium text-sm'>Enquiry Form</p>
                <p className='text-sx'>Fill out the form below with your inquireis and a member of our team would reach out to you as soon as possible
                </p>
                <form action="" className='space-y-5'>
                    <input type="text" className='p-4 rounded-2xl w-full outline-none border border-black ' placeholder='Full Name' />
                    <input type="email" className='p-4 rounded-2xl w-full outline-none border border-black ' placeholder='Email Address' />
                    <div className='flex justify-between items-center border text-gray-500 border-black rounded-2xl p-4'>
                        <p>Service Type</p>
                        <select name="" id="" className='outline-none w-[50%]'>
                            <option value=""></option>
                            <option value="">General Enquiry</option>
                            <option value="">Booking Enquiry</option>
                            <option value="">Feedback</option>
                        </select>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className='p-4 rounded-2xl w-full outline-none border border-black ' placeholder='Message'></textarea>
                    <button className=' mt-2 block border border-black rounded-full px-6 py-3 text-sm w-full'><span className='pr-4'>Submit Message</span> →</button>
                </form>

            </div>
        </section>

      
    </div>
  )
}
