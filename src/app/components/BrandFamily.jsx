import React from 'react'



export default function BrandFamily() {
  const brand = [
    {image:'resort',title:'Perennia Hotels & Resorts'},
    {image:'essence',title:'Essence by Perennia'},
    {image:'essence',title:'Essence by Perennia'},
    {image:'golf',title:'Ibom Icon Hotel & Golf Resort'}
  ]
  return (
    <section className='border-b border-[#3D3316] border-opacity-20 pb-10'>
      <div className='mx-6 md:mx-[80px] flex md:items-end flex-col md:flex-row justify-between mb-[60px]'>
        <div className='w-full md:w-[48%] mb-5 md:mb-0'>
          <h2 className='text-2xl text-[#3D3316] tracking-[-1px] md:text-4xl md:w-[303px] text-left font-semibold md:font-normal' style={{letterSpacing:'-1px'}}>Our Family Brand</h2>
        </div>
        <div className='w-full md:max-w-[52%]'>
          <p className='font-medium text-lg text-justify leading-relaxed' style={{letterSpacing:'-1px'}}>The Perennia Hotels & Resorts brand is an upper upscale hotel and resort brand, with an emphasis on living spaces that evoke a sense of contemporary African design and a service culture of excellence.</p>
        </div>
              
        </div>
        <div className='m-6 md:mx-[45px] flex flex-col md:flex-row   gap-[10px]'>
          {
            brand.map((item,index)=>{
              return <BrandCard key={index} image={item.image} title={item.title}/>
            })
          }
        </div>
      
    </section>
  )
}



export  function BrandCard({image,title}) {
  return (
    <div style={{backgroundImage: `url(./assets/${image}.png)`}} className='bg-cover bg-center h-[300px] w-full flex items-end  rounded-lg '>
        <div className='bg-gradient-to-t from-black to-transparent w-full  h-28 flex items-end p-4 rounded-b-lg'>
          <h1 className='text-white font-semibold'>{title}</h1>
        </div>
    </div>
  )
}
