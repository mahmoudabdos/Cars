
import img1 from "./../../assets/images/card/car1.png";
import img2 from "./../../assets//images/card/car2.png";
import img3 from "./../../assets//images/card/car3.png";
import img4 from "./../../assets//images/card/car1.png";
import star from "../../assets/images/card/star.png";
import style from "./Products.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Products = () => {

  // Test mock data 
  const Cars = [
    {
        // Test mock data 
        
    //   name: "Jaguar XE L P250",
    //   rating: 4.8,
    //   reviews: 2436,
    //   passengers: 4,
    //   doors: 4,
    //   airConditioning: true,
    //   transmission: "Auto",
    //   price: 1800,
      image: img1
    },
    {
        
    //   name: "Audi R8",
    //   rating: 4.6,
    //   reviews: 1936,
    //   passengers: 2,
    //   doors: 2,
    //   airConditioning: true,
    //   transmission: "Auto",
    //   price: 2100,
      image: img2,
    },
    {
    //   name: "BMW M3",
    //   rating: 4.5,
    //   reviews: 2036,
    //   passengers: 4,
    //   doors: 4,
    //   airConditioning: true,
    //   transmission: "Auto",
    //   price: 1600,
      image: img3 
    },
    {
    //   name: "Lamborghini Huracan",
    //   rating: 4.3,
    //   reviews: 2236,
    //   passengers: 2,
    //   doors: 2,
    //   airConditioning: true,
    //   transmission: "Auto",
    //   price: 2300,
     image: img4 
    }
  ];
  const navigate = useNavigate();

  const [carsSpacifecation, setCarsSpacifecation] = useState([]);
  


  async function getCarsSpicefications() {
    // const limit = 4; 
    try {
      const { data } = await axios.get(`https://myfakeapi.com/api/cars`);
      setCarsSpacifecation(data.cars.splice(0, 4));
      // console.log(data);
      
    } catch (error) {
      error.log(error);
    }
  }




  function navigateToCarDetails() {
    navigate("/carDetails");
  }
  
  function navigateToVehicles() {
    navigate("/all-vehicles");
  }

  useEffect(() => {
   getCarsSpicefications();
  }, []);


  return <>
   <div className="container mt-5">
   <div className="d-flex justify-content-start align-items-center" style={{ marginTop: "25px", marginLeft: "160px" }}>
  <div className="input-group" style={{ 
      width: "1120px", 
      height: "72px", 
      borderRadius: "12px", 
      paddingLeft: "32px", 
      paddingTop: "12px", 
      paddingRight: "12px", 
      paddingBottom: "12px", 
    }}>
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1" style={{ borderRadius: "12px 0 0 12px", height: "100%" }}>
      <i className="fa-solid fa-location-dot"></i> 
      </span>
    </div>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Search by name" 
      aria-label="Search by name" 
      aria-describedby="basic-addon1" 
      style={{ height: "100%" }}
    />
    <button 
          className="btn btn-primary" type="button" style={{ borderRadius: "0 12px 12px 0", height: "100%" }}>
      Search
    </button>
  </div>
    </div>
      <div className="text-center mb-4">
        <h2 className="font-weight-bold">Most popular cars rental deals</h2>
        <p className={`${style.Popular}`}>Popular Rental Deals</p>
      </div>

      <div className="row">
        {carsSpacifecation.map((car, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img className="card-img-top" src={Cars[index].image}  alt={car.name} />
              <div className="card-body">
                <h5 className="card-title">{car.make} {car.model}</h5>
                <p className="text-sm font-medium  mt-1 ">
                <img src={star} className="padding-bottom: 0.25rem" alt="" /> 4.6{" "}
                <span className="text-gray-500 font-normal">
                  (1345 reviews)
                </span>
              </p>
              
                <ul className="list-inline">
                  <li className="list-inline-item">
                  <i className="fas fa-user"></i> {car.passengers} 2 Passengers
                  </li>
                  <li className="list-inline-item">
                  <i className="fas fa-cogs"></i>  {car.year}
                  </li>
                  <li className="list-inline-item">
                  <i className="fas fa-snowflake"></i> Air Conditioning
                  </li>
                  <li className="list-inline-item">
                  <i className="fas fa-door-open"></i> {car.transmission} Doors
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="text-primary">${car.price}</h4>
                    <small>/day</small>
                  </div>
                  <button 
                onClick={navigateToCarDetails}
                 className="btn btn-primary"
                       >
                view details  &rarr;
              </button>


                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
        onClick={navigateToVehicles}
         className="btn btn-outline-secondary">Show all vehicles &rarr;</button>
      </div>
    </div>
  </>
 
};

export default Products;
