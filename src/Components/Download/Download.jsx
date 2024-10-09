import iphoneImage from "../../assets/images/landing-page/sec-7/iPhone-14.png"
import andoridImage from "../../assets/images/landing-page/andriod.png";
import iosImgage from "../../assets/images/landing-page/ios.png";

export default function Download() {
  return <>
<section className="pt-4 d-flex flex-column flex-lg-row justify-content-between align-items-center">
  <div className="px-4 py-4 w-100 w-lg-50 d-flex flex-column align-items-center align-items-lg-start">
    <h1 className="fs-2 fs-md-1 fw-medium text-center text-lg-start">
      Download Rentcars App for <span className="text-primary">FREE</span>
    </h1>
    <p className="text-center text-lg-start mb-3">
      For faster, easier booking and exclusive deals.
    </p>

    {/* Store buttons */}
    <div className="d-flex justify-content-center justify-content-lg-start mb-4">
      <img src={andoridImage} alt="Google Play" className="store-icon mx-2" style={{ width: '150px' }} />
      <img src={iosImgage} alt="App Store" className="store-icon mx-2" style={{ width: '150px' }} />
    </div>

    {/* Form Inputs */}
    <div className="form-group w-100 w-lg-75">
      <input
        type="text"
        id="name-input"
        placeholder="Name"
        className="form-control my-2 rounded-pill p-3 text-dark border border-secondary bg-light"
      />
      <input
        type="text"
        id="phone-input"
        placeholder="Phone Number"
        className="form-control my-2 rounded-pill p-3 text-dark border border-secondary bg-light"
      />
      <input
        type="email"
        id="email-input"
        placeholder="Email"
        className="form-control my-2 rounded-pill p-3 text-dark border border-secondary bg-light"
      />
    </div>

    {/* Send Button */}
    <div className="d-flex justify-content-center justify-content-lg-start w-100 mt-3">
      <button className="btn btn-primary rounded-pill py-2 px-5">
        Send
      </button>
    </div>
  </div>

  {/* Phone Image Section */}
  <div className="w-75 w-lg-50 d-flex justify-content-center align-items-end my-4 my-lg-0">
    <img src={iphoneImage} className="phone-image img-fluid" alt="Phone Display" style={{ maxWidth: '400px' }} />
  </div>
</section>

  </>

}





