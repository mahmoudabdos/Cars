import axios from "axios";
import car1 from "../../assets/images/landing-page/car3.png";
import car3 from "../../assets/images/landing-page/car1.png";
import star from "../../assets/images/card/star.png";
import car2 from "../../assets/images/landing-page/car2.png";
import avatar from "../../assets/images/card/user.png";
import arrow from "../../assets/images/card/arrow-right.png";
import ice from "../../assets/images/card/d8wxke_2_.png";
import { useNavigate } from "react-router-dom";
import frame from "../../assets/images/card/Frame.png";
import { useEffect, useState } from 'react';

// import Pagination from 'rsuite/Pagination';


export const AllVehicles = () => {

    const carImages = [
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        { carImg: car1 },
        { carImg: car2 },
        { carImg: car3 },
        
      ];

      
    
      const navigate = useNavigate();
      
      const [carDetails, setCarDetails] = useState([]);
      // eslint-disable-next-line no-unused-vars
      // const [searchQuery, setSearchQuery] = useState("");
      // // eslint-disable-next-line no-unused-vars
      // const [currentPage, setCurrentPage] = useState(1);
      // // eslint-disable-next-line no-unused-vars
      // const [totalPages, setTotalPages] = useState(1);
      // const [itemsPerPage] = useState(30); 
    
      async function getCarsSpecefecations() {
        try {
          const { data } = await axios.get(`https://myfakeapi.com/api/cars/`);
    
          console.log(data);

          

    
          if (Array.isArray(data)) {
            setCarDetails(data); 
            
            // setTotalPages(Math.ceil(data.length / itemsPerPage)); 
          } else {
            setCarDetails([]); 
            // setTotalPages(1); 
          }
        } catch (error) {
          console.log("erroe from AllVechiles",error);
          setCarDetails([]);
          // setTotalPages(1);
        }
      }
      useEffect(() => {
        getCarsSpecefecations();
      }, []);


      // function handleSeach() {
      //   setCurrentPage(1);
      //   getCarsSpecefecations(searchQuery);
      // }
      function navigateToDetails() {
        navigate("/details");
      }

      // pagenation 
        //   const PagenationNP = (page) => {
        //     setCurrentPage(page);
        //   };
        // error on my think 
      // const indexOfLastItem = currentPage * itemsPerPage;
      // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      // const currentItems = carDetails.slice(indexOfFirstItem, indexOfLastItem); 
    
     

  return <>
   
   <section className="py-3 overflow-hidden">

  <button className="btn btn-primary d-block mx-auto mt-3 bg-light text-primary py-2 px-4 rounded">
    POPULAR RENTAL DEALS
  </button>

  <h1 className="text-center my-4 display-5">
    Most popular cars rental deals
  </h1>

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

  <div className="row px-5 mt-4">
    {carDetails.length === 0 ? (
      <div className="col-12 text-center text-danger">
        No cars available with this name.
      </div>
    ) : (
      carDetails.map((car, index) => (
        <div key={index} className="col-sm-6 col-lg-3 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">       
              <img
                className="w-100 rounded"
                src={carImages[index].carImg}
                alt=""
              />
              <h5 className="mt-3 card-title">
                {car.make} {car.model}
              </h5>
              <p className="card-text mt-2">
                <img src={star} className="me-1" alt="" /> 4.6{" "}
                <span className="text-muted">(1345 reviews)</span>
              </p>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mt-1 text-muted">
                    <img className="me-1" src={avatar} alt="" /> 2 Passengers
                  </p>
                  <p className="mt-1 text-muted">
                    <i className="fa-solid fa-calendar-days me-1"></i> {car.year}
                  </p>
                </div>
                <div>
                  <p className="mt-1 text-muted">
                    <img className="me-1" src={frame} alt="" /> {car.transmission}
                  </p>
                  <p className="mt-1 text-muted">
                    <img className="me-1" src={ice} alt="" /> Air conditioning
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <h6 className="text-muted">Price</h6>
                <h6>
                  ${car.price} <span className="text-muted"> /day</span>
                </h6>
              </div>
              <button
                onClick={navigateToDetails}
                className="btn btn-primary w-100 mt-2"
              >
                View details <img className="ms-2" src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  <div className="d-flex justify-content-center mt-4">
    {/* <Pagination/> */}
  </div>
</section>




  </>
}
