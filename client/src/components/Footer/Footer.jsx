import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <hr />
      <div className="bg-gray-800 py-6">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row justify-around">
            <div className="mb-4 md:mb-0 text-center">
              <h2 className="text-2xl font-bold">Company Name</h2>
              <p className="text-sm">
                A brief description of your company or website.
              </p>
            </div>

            <div className="sm:flex md:flex-row flex-nowrap justify-around">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="text-sm">
                  <li>
                    <RouterLink to="/?scrollTo=about">About</RouterLink>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Connect With Us</h3>
                <ul className="text-sm">
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
    </>
  );
}

export default Footer;
