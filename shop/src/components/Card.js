import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {motion} from 'framer-motion'





function Card() {
const [products,setProudcts]=useState([])
     const  callApi= async()=>{
         await axios("http://localhost:5000/products").then((response) => {
             console.log(response);
             setProudcts(response.data)
        })
       
    }

    useEffect( () => {
     callApi()
    },[])
  return (
    
          
      <motion.div
          
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                  type: "spring",
                  damping: 7,
                  stiffness: 100,
                  restDelta: 0.001
              }
          }}
          className="bg-white">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                  {products.map((product) => (
                      <div key={product.id} className="group relative m-4">
                          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:bg-transparent group-hover:scale-105  lg:aspect-none lg:h-80 drop-shadow-2xl ">
                              <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-[200px] w-[300px]  object-center lg:h-full lg:w-full "
                              />
                          </div>
                          <div className="mt-4 flex justify-between">
                              <div>
                                  <h3 className="text-sm text-gray-700">
                                      <a href={product.href}>
                                          <span aria-hidden="true" className="absolute inset-0" />
                                          {product.name}
                                      </a>
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">{product.price}</p>
                          </div>
                      </div>
                  ))}
              </div>
                  
              </div>
          </motion.div>  
          

  )
}

export default Card