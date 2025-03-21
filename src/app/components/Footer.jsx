import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const socials = [
        {name:'twitter', link:'https://twitter.com'},
        {name:'linkedin', link:'https://linkedin.com'},
        {name:'facebook', link:'https://facebook.com'},
        {name:'instagram', link:'https://www.instagram.com/perenniahotels?utm_source=qr&igsh=NGQ4amsyemswMmQw'},
    ]
    const links =[
        {name:'About Us', link:'/about-us'},
        {name:'Our Team', link:'/our-team'},
        {name:'Our Projects', link:'/our-projects'},
        {name:'Work With Us', link:'/contact-us'},
    ]
  return (
 
        <footer className="w-full bg-[#3D3316] text-white py-10 mt-10">
            <div className='mx-10 md:mx-[110px] gap-4  flex flex-col md:flex-row justify-between'>
                <section className='w-full md:w-[32%]  flex flex-col gap-2   '>
                    <Image src="/assets/footer-logo.png" alt="logo" width={305} height={69}  className='ml-[-8px]'/>
                    <div className= 'space-y-4 hidden md:block w-full'>
                      <p className="text-lg ">Stay up to date</p>
                      <input type="text" placeholder='Enter an email address'  className='rounded-lg bg-white px-4 py-4 text-black w-full  text-xs '/>
                      <button className='bg-[#3D3316] mt-2 block border border-white text-white rounded-full px-6 py-3 text-sm'>Sign up →</button>
                    </div>
                </section>

                <section className=' md:w-[52%] md:mt-2 flex flex-col md:flex-row justify-between  gap-4 md:gap-x-[40px] gap-x-10'>
                    <div className=' flex flex-col gap-2 justify-start  items-start '>
                      <p className='text-white font-bold mb-[27px]  text-[15px] '>Perennia</p>
                      <nav className='space-y-[20px]'>
                        {
                          links.map((item,index)=>{
                              return <Link key={index}  href={item.link} className='text-sm block'>{item.name}</Link>
                          })
                        }
                      </nav>

                    </div>
               
                    <div className=' flex flex-col my-5 md:my-0 gap-2 justify-start  capitalize '>
                      <p className='text-white font-bold mb-[27px] text-[15px] '>Follow Us</p>
                      <nav className='space-y-[20px]'>
                        {
                          socials.map((item,index)=>{
                              return <Link key={index}  href={item.link} className='text-sm block'>{item.name}</Link>
                          })
                        }
                      </nav>

                    </div>
                    <div className=' flex flex-col gap-2 justify-start   capitalize'>
                      <p className='text-white font-bold mb-[27px] '>Legal</p>
                      <nav className='space-y-[20px]'>
                      
                       <Link href='/' className='text-sm block'>©2025 Perennia Hotels & Resort</Link>
                       <Link href='/' className='text-sm block'>All Rights Reserved</Link>
                      </nav>
                    </div>

                </section>
                <section className='w-full md:hidden  flex flex-col gap-2 mt-10 items-start '>
                    <p className="text-lg ">Stay up to date</p>
                    <input type="text" placeholder='Enter an email address'  className='rounded-lg bg-white px-4 py-4 text-black w-full  text-xs '/>
                    <button className='bg-[#3D3316] w-full mt-2 block border border-white text-white rounded-full px-6 py-3 text-sm'>Sign up <span className="ml-2">→</span></button>
                </section>
            </div>
            
      
        </footer>
      
 
  )
}
