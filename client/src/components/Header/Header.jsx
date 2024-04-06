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
              className="w-1/2 h-96 rounded-sm"
              src={bannerData.image.asset.url}
              alt="Banner"
            />
          )}
          <h1 className="Shop w-28 mx-auto bg-accent text-center mt-4 z-20 md:w-48">
            <Link to="/products">SHOP NOW</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
