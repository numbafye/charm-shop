import Footer from "../components/Footer/Footer";
import Navbar from "../components/Common/Navbar";
// commented out section for more information
function Contact() {
  return (
    <>
      <Navbar />
      {/* <div className="flex flex-row flex-nowrap"> */}
    
      <section
        className="m-10 p-6 bg-blue-700 rounded-lg shadow-md md:mt-56"
        id="contact"
      >
        <h2 className="text-center text-2xl font-bold mb-4">Contact Me</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className=" md:h-72"
        >
          <div className="form-group mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded border border-gray-300"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-bold py-2 px-4 rounded border hover:bg-btn"
          >
            Send
          </button>
        </form>
      </section>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Contact;
