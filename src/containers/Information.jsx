import { useContext, useRef } from "react"
import { Link ,useNavigate} from "react-router-dom"
import AppContext from "../context/AppContext"



function Information(props) {

  const {state,addToBuyer}=useContext(AppContext)

  const form=useRef(null) ;
const navigate=useNavigate()
  const {cart} = state ;

  function handleSubmit(event) {

    event.preventDefault()

    const formData=new FormData(form.current)

    const buyer = {
      "fullName": formData.get("fullName"),
      "email": formData.get("email"),
      "address": formData.get("address"),
      "country": formData.get("country"),
      "city": formData.get("city") , 
      "district": formData.get("district") , 
      "postalCode": formData.get("postalCode") , 
      "phone": formData.get("phone")

    }

    
    addToBuyer(buyer);
    navigate("/checkout/payment");

  }


  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical</p>
      <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                <div class="mb-5 text-gray-400">
            <h1  class="focus:outline-none  text-slate-900 text-2xl "> Informacion de Contacto</h1>
        </div>
                    
<form ref={form} onSubmit={handleSubmit}>
  <div class="mb-6">
    
    <input type="text" id="fullName"  name="fullName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre completo" required />
  </div>
  <div class="mb-6">
    
    <input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
  </div>
  <div class="mb-6">
    
    <input type="text" id="address" name="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Direccion" required />
  </div>
  <div class="mb-6">
    
    <input type="text" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pais" required />
  </div>
  <div class="mb-6">
    
    <input type="text" id="city" name="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciudad" required />
  </div>
  <div class="mb-6">
    
    <input type="text" id="district" name="district" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Distrito" required />
  </div>
  <div class="mb-6">
    
    <input type="text" id="postalCode" name="postalCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codigo postal" required />
  </div>
  <div class="mb-6">
    
    <input type="text" id="phone" name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefono" required />
  </div>
  <div class="grid  md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
    <Link to="/checkout"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Regresar</button></Link>
    </div>
    <div class="relative z-0 w-full mb-6 group">
    
    <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pagar</button>
    
    </div>
  </div>
 
</form>

                    
                    
                    
                </div>
                <div class="px-3 md:w-5/12">
                <div class="mb-5 text-gray-400">
            <h1  class="focus:outline-none  text-slate-900 text-2xl "> Pedido</h1>
        </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                        
                        <div class="w-full flex items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Total Precio</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>$ 10</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        
                    </div>
                </div>
            </div>
  </div>
</section>
  )
}



export default Information
