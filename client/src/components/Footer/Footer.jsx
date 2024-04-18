import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";

function Footer() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "banner"] {
        "image": image.asset-> {
          _id,
          url
        },
      }[2]`
      )
      .then((data) => setBanner(data))
      .catch(console.error);
  }, []);

  return (
    <div className="footer">
      {banner.image && (
        <img
          className="footer-img h-56 md:h-72 xsm:h-80"
          src={banner.image.url}
          alt="Banner"
        />
      )}
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:justify-around">
          <div className="mb-4 md:mb-0 text-center z-10">
            <h2 className="text-2xl font-bold mt-2 md:text-4xl">
              Company Name
            </h2>
            <p className="text-sm md:text-xl font-medium">
              A brief description of your company or website.
            </p>
          </div>

          <div className="sm:flex md:flex-row flex-nowrap justify-around z-10 md:pt-2">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold md:text-2xl">Quick Links</h3>
              <ul className="text-sm md:text-xl font-medium">
                <li>
                  <RouterLink to="/?scrollTo=about">About</RouterLink>
                </li>
                <li>
                  <RouterLink to="/contact">Contact Us</RouterLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold md:text-2xl">Connect With Us</h3>
              <ul className="text-sm md:text-xl font-medium">
                <li>
                  <a href="#">Email: contact@example.com</a>
                </li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>
                  <a
                    href="https://www.facebook.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/alpha_nails_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
