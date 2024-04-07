import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sanityClient from "../../../charmecom/Client";

function Header() {
  const [bannerData, setBannerData] = useState(null);
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(`*[_type == "banner"]{  "image": image.asset-> {
            _id,
            url
          },}[0]`),
      sanityClient.fetch(
        `*[_type == "header"]{  "image": image.asset-> {
            _id,
            url
          },}[0]`
      ),
    ])
      .then(([bannerResponse, headerResponse]) => {
        setBannerData(bannerResponse);
        setHeaderData(headerResponse);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="Header">
      <div className=" mx-auto">
        <div className="banner flex justify-center">
          {bannerData && (
            <img
              className="w-full h-96 rounded-sm blur-lg"
              src={bannerData.image.url}
              alt="Banner"
            />
          )}
          {headerData && (
            <img
              className="CharmB w-full h-auto max-h-80 absolute z-10 rounded-sm"
              src={headerData.image.url}
              alt="Header"
            />
          )}
          <h1 className="absolute bottom-20 p-2 w-28 mx-auto bg-accent text-text text-center mt-4 z-20 md:w-48">
            <Link to="/products">SHOP NOW</Link>
          </h1>
          <h1 className="absolute bottom-5 mx-auto text-center mt-4 z-20 text-2xl md:text-3xl">
            <Link to="/products">Banner for Slogan or Product advert</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
