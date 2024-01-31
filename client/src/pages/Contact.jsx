import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      {" "}
      <section className="m-10 bg-blue-700" id="contact">
        <h2 className="text-center">Contact Me</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-input"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-btn">
            Send
          </button>
        </form>
      </section>
<Footer/>
    </>
  );
}

export default Contact;
