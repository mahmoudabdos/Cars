import callImg from "../../assets/images/footer/call.png";
import locationImg from "../../assets/images/footer/location.png";
import smsImg from "../../assets/images/footer/sms.png";
import logoImg from "../../assets/images/footer/logo-footer.png";
import facebookImg from "../../assets/images/footer/facebook.png";
import instagramImg from "../../assets/images/footer/instagram.png";
import youtubeImg from "../../assets/images/footer/youtube.png";


export default function Footer() {
  return <>
{/* Footer */}
<section className="bg-dark text-white px-4 py-4 mt-4">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 py-3 border-bottom">
    {/* Contact Details */}
    <div className="col">
      <img src={logoImg} className="mb-4" alt="Logo" />
      <div className="d-flex align-items-center my-2">
        <img src={locationImg} className="me-2" alt="Location" />
        <div>
          <h6 className="mb-0">25566 Hc 1, Glenallen</h6>
          <small>Alaska, 99588, USA</small>
        </div>
      </div>
      <div className="d-flex align-items-center my-2">
        <img src={callImg} className="me-2" alt="Call" />
        <h6 className="mb-0">+603 4784 273 12</h6>
      </div>
      <div className="d-flex align-items-center my-2">
        <img src={smsImg} className="me-2" alt="Email" />
        <h6 className="mb-0">rentcars@gmail.com</h6>
      </div>
    </div>

    {/* Footer Links */}
    <div className="col">
      <h6 className="fw-bold">Our Product</h6>
      <ul className="list-unstyled text-xs">
        <li className="my-2">Career</li>
        <li className="my-2">Car</li>
        <li className="my-2">Packages</li>
        <li className="my-2">Features</li>
        <li className="my-2">Priceline</li>
      </ul>
    </div>

    <div className="col">
      <h6 className="fw-bold">Resources</h6>
      <ul className="list-unstyled text-xs">
        <li className="my-2">Download</li>
        <li className="my-2">Help Centre</li>
        <li className="my-2">Guides</li>
        <li className="my-2">Partner Network</li>
        <li className="my-2">Cruises</li>
        <li className="my-2">Developer</li>
      </ul>
    </div>

    <div className="col">
      <h6 className="fw-bold">About Rentcars</h6>
      <ul className="list-unstyled text-xs">
        <li className="my-2">Why choose us</li>
        <li className="my-2">Our Story</li>
        <li className="my-2">Investor Relations</li>
        <li className="my-2">Press Center</li>
        <li className="my-2">Advertise</li>
      </ul>
    </div>

    {/* Social Media */}
    <div className="col">
      <h6 className="fw-bold">Follow Us</h6>
      <div className="d-flex">
        <img className="me-2" src={facebookImg} alt="Facebook" />
        <img className="me-2" src={instagramImg} alt="Instagram" />
        <img className="me-2" src={youtubeImg} alt="YouTube" />
      </div>
    </div>
  </div>

  {/* Footer Copyright */}
  <div className="text-center py-3">
    <small>Copyright 2023 ・ Rentcars, All Rights Reserved</small>
  </div>
</section>

  </>
}







