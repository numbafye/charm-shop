import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sanityClient from "../../../charmecom/Client";

function Carousel() {
  //SLIDESHOW FUNCTION
  const [slidesToShow, setSlidesToShow] = useState(2); // Initial value for slidesToShow

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 976) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3); // Adjust the number of slidesToShow for wider screens (e.g., 976px and beyond)
      }
    };

    // Call the listener on component mount
    handleResize();

    // Attach the listener to window resize events
    window.addEventListener("resize", handleResize);

    // Remove the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Set the slidesToShow based on the screen width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  //SANITY CLIENT FETCHING
  const [products, setProducts] = useState(null);

  useEffect(() => {
    sanityClient
      //GROQ QUERY
      .fetch(
        `*[_type == "product"]{
          image,
          name,
          price,
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }),
    [];

  console.log(products);

  return (
    <>
      <div className="carousel-container p-20">
        <Slider {...settings} className="center">
          {" "}
          {products &&
            products.map((products, index) => (
              <div key={index} className="carousel-slide">
                <div>{products.name}</div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;

//Mock data in carousel function
{
  /* <div className="carousel-slide">
            <img
              src="src\assets\charm2.jpg"
              alt="Image 1"
              className="center-image"
            />
          </div>
          <div className="carousel-slide">
            <img
              src="src\assets\charm5.jpg"
              alt="Image 2"
              className="center-image"
            />
          </div>
          <div className="carousel-slide">
            <img
              src="src\assets\charm6.jpg"
              alt="Image 3"
              className="center-image"
            />
          </div> */
}
