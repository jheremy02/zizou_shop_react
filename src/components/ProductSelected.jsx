
import { BsTrash } from "react-icons/bs";
import React, { useContext, useState } from 'react'

function ProductSelected({product,handleremove}) {
const [total,setState]=useState(product.quantity*product.price)
  return (
    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        <div class="w-full flex items-center">
                            <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                <img src={product.image} alt="" />
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-semibold uppercase text-gray-600">Ray Ban Sunglasses.</h6>
                                <p class="text-gray-400">x {product.quantity}</p>
                            </div>
                            <div>
                            <span class="font-semibold text-gray-600 text-xl">${total}</span>
                                
                            </div>
                            <div className='p-4'>
                            <button>
                            <BsTrash className='text-lg' onClick={(event)=>{handleremove(product)}}></BsTrash>
                            </button>
                            </div>
                        </div>
                    </div>
  )
}

export default ProductSelected