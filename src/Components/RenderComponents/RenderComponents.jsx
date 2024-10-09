// import { Navbar } from "rsuite"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Products from "../Products/Products"
import Work from "../Works/Work"
import Offers from "../Offers/Offers"
import Rating from "../Rating/Rating"
import Download from "../Download/Download"
import Footer from "../Footer/Footer"

export const RenderComponents = () => {
  return <>
    <Navbar/>
    <Home/>
    <Products/>
    <Work/>
    <Offers/>
    <Rating/>
    <Download/>
    <Footer/>
  </>
  
  
}
