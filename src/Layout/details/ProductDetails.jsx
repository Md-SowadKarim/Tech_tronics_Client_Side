import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { savedJob } from '../../utility/Local'

const ProductDetails = () => {
    const data=useLoaderData()
    console.log(data._id)

    const handleClick=(data)=>{
      const pro={
        id:data._id
      }
        savedJob(pro)
    }
  return (
    <div>
      <section className="dark:text-white   overflow-hidden border-4 rounded-xl border-white bg-gray-200 dark:bg-gray-600 ">
  <div className="container px-5 py-24 mx-auto ">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full md:h-auto lg:h-auto h-64 object-cover object-center  rounded" src={data.imgUrl}/>
      
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-2xl title-font dark:text-white tracking-widest">{data.brand}</h2>
        <h1 className="dark:text-white text-3xl title-font font-medium mb-1">{data.name}</h1>
        <div className="flex mb-4 justify-between">
          <span className="flex items-center ">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          
            
            <span className="dark:text-white text-lg ml-1">{data.rating} Rating</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="dark:text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="dark:text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="dark:text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed text-lg">{data.description}</p>
       
        <div className="flex my-8">
          <span className="title-font font-medium text-2xl dark:text-white">Price: {data.price}$</span>
          <button onClick={()=>handleClick(data)} className="flex ml-auto text-white bg-blue-500 border-0 py-2  px-2 sm:px-6 focus:outline-none rounded-lg hover:bg-blue-600 ">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ProductDetails
