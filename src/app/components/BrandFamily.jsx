import React from 'react'



export default function BrandFamily() {
  const brand = [
    {image:'resort',title:'Perennia Hotels & Resort'},
    {image:'essence',title:'Essence by Perennia'},
    {image:'essence',title:'Essence by Perennia'},
    {image:'golf',title:'Ibom Icon Hotel & Golf Resort'}
  ]
  return (
    <section className='border-y-1 border-gray-200 py-15 space-y-10'>
        <div className='flex px-10 gap-2 flex-col md:flex-row justify-between '>
            <div className='md:w-1/2'>
                <h2 className='text-4xl w-[85%] text-[#3D3316]  tracking-tighter '>Our Family Brand.</h2>
            </div>
            <div className='md:w-1/2'>
                <p className='font-medium'>The Perennia Hotels & Resorts brand is an upper upscale hotel and resort brand, with an emphasis on living spaces that evoke a sense of contemporary African design and a service culture of excellence.</p>
            </div>
              
        </div>
        <div className='flex flex-col md:flex-row justify-between px-5 gap-2'>
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
    <div style={{backgroundImage: `url(./assets/${image}.png)`}} className='bg-cover bg-center h-[250px] w-full flex items-end  rounded-lg '>
        <div className='bg-gradient-to-t from-black to-transparent w-full  h-28 flex items-end p-4 rounded-b-lg'>
          <h1 className='text-white font-bold'>{title}</h1>
        </div>
    </div>
  )
}
