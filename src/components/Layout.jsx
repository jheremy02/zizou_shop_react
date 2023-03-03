import  Footer  from "./Footer"
import Header from "./Header"
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <div>
        <Header></Header>
            <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout