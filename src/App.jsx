import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { Layout } from './Layout/Layout'
import { NotFound } from './Components/NotFound/NotFound'
import { CarDetails } from './Components/CarDetails/CarDetails'
import { RenderComponents } from './Components/RenderComponents/RenderComponents'
import { AllVehicles } from './Components/AllVehicles/AllVehicles'


function App() {

  const routes = createBrowserRouter([

         {
       path: "/",
      element: <Layout />,
      errorElement:<NotFound/>,
      children: [
        {
          index: true,
          element: <RenderComponents />,
        },
        { 
          path: "home",
          element: <Home />,
        },
        {
          path: "carDetails",
          element: <CarDetails />,
        },
        {
          path: "all-vehicles",
          element: <AllVehicles />,
        },


          ]

        }
  ])

  return <>  

     <RouterProvider router={routes}></RouterProvider>

    </>
    
  
}

export default App
