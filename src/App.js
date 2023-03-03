import logo from './logo.svg';
import './App.css';

import { BrowserRouter ,Routes , Route} from "react-router-dom"

import Checkout from "./containers/Checkout";
import Home from "./containers/Home";
import Information from "./containers/Information";
import Payment from "./containers/Payment";
import Success from "./containers/Success";
import NotFound from "./containers/NotFound";
import Layout from './components/Layout';

import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() {

const initialState=useInitialState()


  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route  path='/checkout' >
            <Route index element={<Checkout></Checkout>}></Route>
              <Route  path='information' element={<Information></Information>}></Route>
              <Route  path='payment' element={<Payment></Payment>}></Route>
              <Route  path='success' element={<Success></Success>}></Route>
          </Route>
          
          </Route>
          
          <Route  element={NotFound}></Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
    
  );
}

export default App;
