import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { PayPalButton } from "react-paypal-button-v2";

function Payment({ history }) {
  const { state, addNewOrder, setState } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();
console.log(process.env.REACT_APP_CLIENT_ID_PAYPAL)
  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID_PAYPAL,
    intent: "capture",
  };

  function handleSumTotal() {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  function handlePaymentSuccess(data) {
    if (data.status === "COMPLETED") {
      const newOrder = { buyer, cart, payment: data };
      addNewOrder(newOrder);
      setState({ ...state, cart: [] });
      navigate("/checkout/success");
    }
  }

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical
        </p>
        <div class="-mx-3 md:flex items-start">
          <div class="px-3 md:w-7/12 lg:pr-10">
            <div class="mb-5 text-gray-400">
              <h1 class="focus:outline-none  text-slate-900 text-2xl ">
                {" "}
                Resumen del pedido :
              </h1>
            </div>
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6"
                >
                  <div class="w-full flex items-center">
                    <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-semibold uppercase text-gray-600">
                        {item.title}
                      </h6>
                      <p class="text-gray-400">x {item.quantity}</p>
                    </div>
                    <div>
                      <span class="font-semibold text-gray-600 text-xl">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*

                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i>Pagar con paypal</button>
                        
                        */}

            <PayPalButton
              options={paypalOptions}
              amount={handleSumTotal()}
              onSuccess={(data) => handlePaymentSuccess(data)}
              onError={(error) => console.log(error)}
              onCancel={(data) => console.log(data)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
