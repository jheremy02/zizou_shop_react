import { Link, Outlet } from 'react-router-dom';
import { BsTrash } from "react-icons/bs";
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import ProductSelected from '../components/ProductSelected';


function Checkout(props) {

    const {state,removeFromCart}=useContext(AppContext)
    const {cart}=state

    function handleRemove(product) {
        removeFromCart(product)
    }

    function handleSumTotal() {
        const reducer=(accumulator,currentValue)=>accumulator + currentValue.price*currentValue.quantity
        const sum=cart.reduce(reducer,0)
        return sum
    }

  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical</p>
      <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                <div class="mb-5 text-gray-400">
            <h1  class="focus:outline-none  text-slate-900 text-2xl "> Lista de pedidos</h1>
        </div>
                    
                    {cart.map((product)=>(<ProductSelected key={product.id} product={product} handleremove={handleRemove}></ProductSelected>))}
                    
                    
                </div>
                <div class="px-3 md:w-5/12">
                    {cart.length > 0 && (<div><div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                        
                        <div class="w-full flex items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Total Precio</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>$ {handleSumTotal()}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <Link to="/checkout/information">
                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> Continuar pedido</button>
                        </Link>
                    </div></div>)}
                </div>
            </div>
  </div>
</section>
  )
}

export default Checkout