import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const socials = [
        {name:'twitter', link:'https://twitter.com'},
        {name:'linkedin', link:'https://linkedin.com'},
        {name:'facebook', link:'https://facebook.com'},
        {name:'instagram', link:'https://instagram.com'},
    ]
    const links =[
        {name:'About Us', link:'/about-us'},
        {name:'Our Team', link:'/our-team'},
        {name:'Our Projects', link:'/our-projects'},
        {name:'Work With Us', link:'/work-with-us'},
    ]
  return (
 
        <footer className="w-full bg-[#3D3316] text-white py-10 mt-10">
            <div className='w-[85%] mx-auto gap-4 items-start md:items-center flex flex-col md:flex-row justify-between'>
                <section className='w-full md:w-[35%]  flex flex-col gap-2  items-start '>
                    <Image src="/assets/footer-logo.png" alt="logo" width={300} height={300} />
                    <div className= 'space-y-4 hidden md:block'>
                      <p className="text-lg ">Stay up to date</p>
                      <input type="text" placeholder='Enter an email address'  className='rounded-lg bg-white px-4 py-4 text-black w-full  text-xs '/>
                      <button className='bg-[#3D3316] mt-2 block border border-white text-white rounded-full px-6 py-3 text-sm'>Sign up →</button>
                    </div>
                </section>
                <section className=' w-[45%] flex flex-col md:flex-row justify-between items-start gap-y-4 gap-x-10'>
                    <div className=' flex flex-col gap-2 justify-start gap-y-4 items-start '>
                      <p className='text-white font-bold mb-3'>Perennia</p>
                       <Link href='/' className='text-sm'>About Us</Link>
                       <Link href='/' className='text-sm'>Our Team</Link>
                       <Link href='/' className='text-sm'>Our Projects</Link>
                       <Link href='/' className='text-sm'>Work With Us</Link>

                    </div>
               
                    <div className=' flex flex-col gap-2 justify-start gap-y-4 items-start '>
                      <p className='text-white font-bold mb-3'>Follo Us</p>
                      {
                        socials.map((item,index)=>{
                            return <Link key={index} href={item.link} className='text-sm'>{item.name}</Link>
                        })
                      }

                    </div>
                    <div className=' flex flex-col gap-2 justify-start gap-y-4 items-start '>
                      <p className='text-white font-bold mb-3'>Legal</p>
                       <Link href='/' className='text-sm'>Privacy Policy</Link>
                       <Link href='/' className='text-sm'>Sustainability Policies</Link>
                       <Link href='/' className='text-sm'>©2025 Perennia Hotels & Resort</Link>
                       <Link href='/' className='text-sm'>All Rights Reserved</Link>

                    </div>

                </section>
                <section className='w-full md:hidden  flex flex-col gap-2 mt-10 items-start '>
                    <p className="text-lg ">Stay up to date</p>
                    <input type="text" placeholder='Enter an email address'  className='rounded-lg bg-white px-4 py-4 text-black w-full  text-xs '/>
                    <button className='bg-[#3D3316] w-full mt-2 block border border-white text-white rounded-full px-6 py-3 text-sm'>Sign up →</button>
                </section>
            </div>
            
      
        </footer>
      
 
  )
}
