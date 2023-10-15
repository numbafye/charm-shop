import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="">
        <div className=" mx-auto">
          <div className="banner flex justify-center">
            <img
              className="CloudL w-1/2 h-96"
              src="/src/assets/pinkcloud.jpg"
              alt="pink cloud"
            />
            <img
              className="CharmB w-96 h-auto max-h-70 absolute z-10 rounded-full"
              src="/src/assets/Banner3.jpg"
              alt="Charm Banner"
            />
            <img
              className="CloudR w-1/2 h-96 flip-horizontal"
              src="/src/assets/pinkcloud.jpg"
              alt="pink cloud"
            />
          </div>
          <h1 className="Shop w-28 mx-auto bg-accent text-center mt-4 z-20 md:w-48">
            <Link to="/products">SHOP NOW</Link>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Header;
