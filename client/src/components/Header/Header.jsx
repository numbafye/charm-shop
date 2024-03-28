import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sanityClient from "../../../charmecom/Client";

function Header() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "banner"] {
          "image": image.asset-> {
             _id,
             url
           },
         }`
      )
      .then((data) => setBanner(data))
      .catch(console.error);
  }, []);

  return (
    <section className="Header">
      <div className=" mx-auto">
        <div className="banner flex justify-center">
          <h1 className="Shop w-28 mx-auto bg-accent text-center mt-4 z-20 md:w-48">
            <Link to="/products">SHOP NOW</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
