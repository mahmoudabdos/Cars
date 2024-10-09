import ioslogo from '../../assets/images/landing-page/ios.png'
import android from '../../assets/images/landing-page/andriod.png'
import car from '../../assets/images/landing-page/car 2 1.png'
import style from "./Home.module.css";


const Home = () => {
    
  return (
    // Inject background image
    <div className={`${style.bg}`}>
    <div className="home-container ">
   

   
      <div className="container d-flex align-items-center justify-content-between py-5">
        {/* Left Side - Text Section */}
        <div className="home-text">
          <h1 className="display-4 fw-bold">
            Find, book and rent a car <span className="text-primary">Easily</span>
          </h1>
          <p className="lead">
            Get a car wherever and whenever you need it with your iOS and Android device.
          </p>
          <div className="mt-4 ">
            <a href="#google-play" className="m-2">
              <img
                src={android}
                alt="Google Play"
                style={{ width: '150px' }}
              />
            </a>
            <a href="#app-store" className="m-2">
              <img
                src={ioslogo}
                alt="App Store"
                style={{ width: '150px' }}
              />
            </a>
          </div>
        </div>

        {/* Right Side - Car Image */}
        <div className="home-image">
          <img
            src={car} // Path to the car image in the public folder
            alt="Car"
            className="img-fluid"
          />
        </div>


      </div>

   
 


    </div>
    </div>
  );
};

export default Home;
