import locationIcon from "../../assets/images/landing-page/location.png";
import volvo from "../../assets/images/landing-page/volvo.png";
import carIcon from "../../assets/images/landing-page/car-icon.png";
import jaguar from "../../assets/images/landing-page/jaguar.png";
import audi from "../../assets/images/landing-page/audi.png";
import nissan from "../../assets/images/landing-page/nissan.png";


export default function Work() {

    const rent = [
        {
          icon: locationIcon,
          heading: "Choose location",
          paragraph: "Choose your and find your best car",
        },
        {
          icon: carIcon,
          heading: "Pick-up date",
          paragraph: "Select your pick up date and time to book your car",
        },
        {
          icon: locationIcon,
          heading: "Book your car",
          paragraph: "Book your car and we will deliver it directly to you",
        },
      ];
      const logos = [
        {
          logo: jaguar,
        },
        {
          logo: nissan,
        },
        {
          logo: volvo,
        },
        {
          logo: audi,
        },
      ];
  return <>

<section className="py-4">
  <button className="btn btn-light d-block mx-auto mt-4 px-4 py-2 text-primary">
    HOW IT WORKS
  </button>

  <h1 className="text-center mt-4 display-4 font-weight-bold">
    Most popular cars rental deals
  </h1>

  <div className="container mt-5">
    <div className="row justify-content-center">
      {rent.map((item, index) => (
        <div key={index} className="col-md-4 col-lg-3 p-3">
          <div className="card h-50 text-center border-0">
            <img
              className="card-img-top w-25 mx-auto rounded"
              src={item.icon}
              alt={item.heading}
            />
            <div className="card-body">
              <h5 className="card-title">{item.heading}</h5>
              <p className="card-text text-muted">{item.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="container mt-5">
    <div className="row justify-content-center">
      {logos.map((item, index) => (
        <div key={index} className="col-md-4 col-lg-3 p-3">
          <img
            className="img-fluid py-3 rounded mx-auto d-block"
            src={item.logo}
            alt={`logo-${index}`}
          />
        </div>
      ))}
    </div>
  </div>
</section>


  </>
}
