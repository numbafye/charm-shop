import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="carousel-container border border-black border-solid p-20 bg-primary">
        <Slider {...settings} className="">
          <div>
            <img src="src\assets\charm2.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="src\assets\charm5.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="src\assets\charm6.jpg" alt="Image 2" />
          </div>

          {/* Add more slides as needed */}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
