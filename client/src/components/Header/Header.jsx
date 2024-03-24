import { Link } from "react-router-dom";
import { useEffect } from "react";
import sanityClient from "../../../charmecom/Client";

function Header() {
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "banner"] {
          "image": image.asset-> {
             _id,
             url
           },
         }`
    );
  });

  return (
    <section className="Header">
      <div className=" mx-auto">
        <div className="banner flex justify-center">
          <img
            className="CloudL w-1/2 h-96 rounded-sm"
            src="../assets/pinkcloud.jpg"
            alt="pink cloud"
          />
          <img
            className="CharmB w-96 h-auto max-h-70 absolute z-10 rounded-full"
            src="../assets/Banner3.jpg"
            alt="Charm Banner"
          />
          <img
            className="CloudR w-1/2 h-96 flip-horizontal rounded-sm"
            src="../assets/pinkcloud.jpg"
            alt="pink cloud"
          />
          <h1 className="Shop w-28 mx-auto bg-accent text-center mt-4 z-20 md:w-48">
            <Link to="/products">SHOP NOW</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
