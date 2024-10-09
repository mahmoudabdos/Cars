

import carImg from "../../assets/images/landing-page/car3.png";
import style from './CarDetails.module.css'
import ice from "../../assets/images/card/d8wxke_2_.png";
import avatar from "../../assets/images/card/user.png";
import frame from "../../assets/images/card/Frame.png";
import door from "../../assets/images/card/doors.png";

export const CarDetails = () => {
  return <>
<section className="d-flex flex-column flex-xl-row w-100 py-5">
  <div className={`w-100 w-lg-50 ${style.background}`}>
    <img src={carImg} className={`${style.carimage} w-75`} alt="" />
  </div>
  <div className="w-100 px-3">
    <button className="btn btn-primary bg-light text-primary mt-3 py-2 px-4 text-sm font-weight-normal rounded-lg">
      WHY CHOOSE US
    </button>
    <h1 className="mt-4 h4 h-xl2 font-weight-semibold">
      We offer the best experience with our rental deals
    </h1>
    <p className="text-muted my-3">
      <img className="inline pb-1" src={avatar} alt="" /> 2 Passengers
    </p>
    <p className="text-muted my-3">
      <img className="inline pb-1" src={ice} alt="" /> Air conditioning
    </p>
    <p className="text-muted my-3">
      <img className="inline pb-1" src={frame} alt="" /> Manual
    </p>
    <p className="text-muted my-3">
      <img className="inline pb-1" src={door} alt="" /> Doors
    </p>
  </div>
</section>

  </>
}
