import carImg from "../../assets/images/landing-page/sec-5/Audi 1.png";
import chatIcon from "../../assets/images/landing-page/sec-5/chat.png";
import messageIcon from "../../assets/images/landing-page/sec-5/message.png";
import userIcon from "../../assets/images/landing-page/sec-5/user.png";
import style from './Offers.module.css'

export default function Offers() {

    const data = [
        {
          icon: userIcon,
          heading: "Best price guaranteed",
          pragraph: "Find a lower price? We’ll refund you 100% of the difference.",
        },
        {
          icon: userIcon,
          heading: "24 hour car delivery",
          pragraph: "Book your car anytime and we will deliver it directly to you.",
        },
        {
          icon: messageIcon,
          heading: "Best price guaranteed",
          pragraph: "Find a lower price? We’ll refund you 100% of the difference.",
        },
        {
          icon: chatIcon,
          heading: "24/7 technical support",
          pragraph:
            "Have a question? Contact Rentcars support any time when you have problem.",
        },
      ];
    
  return <>
<section className="d-flex flex-column flex-xl-row py-4 overflow-hidden" >
  <div className={`  d-flex align-items-center ${style.backgroundimage} col-xl-6`}>
    <img className="w-100" src={carImg} alt="" />
  </div>
  <div className="w-50 mx-4 py-4 col-xl-5">
    <button className="px-4 btn btn-primary-light bg-light py-2 text-primary rounded">
      WHY CHOOSE US
    </button>
    <h1 className="mt-4 display-5 fw-semibold">
      We offer the best experience with our rental deals
    </h1>
    <div>
      {data.map((item, index) => (
        <div key={index} className="d-flex my-4">
          <img className="me-3" src={item.icon} alt="" />
          <div className="d-flex flex-column">
            <h1 className="h5 fw-semibold">{item.heading}</h1>
            <p className="text-muted small">{item.pragraph}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  </>
}
