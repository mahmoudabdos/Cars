import "./Rating.moudel.css"; // Import your custom styles (optional)
import img1 from '../../assets/images/landing-page/sec-6/Rectangle 8 (1).png'
import img2 from '../../assets/images/landing-page/sec-6/girl.png'
const testimonialsData = [
  {
    name: "Charlie Johnson",
    time: "Last updated 3 mins ago",
    rating: 5.5,
    feedback:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    imgUrl:img1,
  },
  {
    name: "Charlie Johnson",
    time: "Last updated 3 mins ago",
    rating: 5.5,
    feedback:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    imgUrl:img2, 
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5 test">
      <h2 className="text-center mb-4">Most popular cars rental deals</h2>
      <div className="row">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="row g-5 ">
                <div className="col-md-4 ">
                  <img
                    src={testimonial.imgUrl}
                    className="img-fluid rounded-start"
                    alt={testimonial.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {testimonial.rating} <small>stars</small>
                    </h5>
                    <div className="mb-2">
                      <span className="text-warning">★★★★★</span>
                    </div>
                    <p className="card-text">&ldquo;{testimonial.feedback}&ldquo;</p>
                    <p className="text-muted mb-1">{testimonial.name}</p>
                    <p className="text-muted small">{testimonial.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
