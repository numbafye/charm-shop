import Carousel from "../components/Common/Carousel";
import Navbar from "../components/Common/Navbar";
import Overlay from "../components/Common/Overlay";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";

function Home() {
  const location = useLocation();
  const { search } = location;
  const queryParams = new URLSearchParams(search);
  const scrollToSection = queryParams.get("scrollTo");

  useEffect(() => {
    if (scrollToSection) {
      // Scroll to the specified section
      scroller.scrollTo(scrollToSection, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [scrollToSection]);

  return (
    <>
      <Overlay />
      <Navbar />
      <Header />
      <div className="NewItems sm:hidden">
        <h2>New Arrivals! (add 2 imgs showing most recently added items)</h2>
      </div>
      <Carousel />
      <Element name="about">
        <section className="m-10" id="about">
          <h2>About</h2>
          <p className="text-sm">
            {/* 150 */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            laboriosam vero cupiditate exercitationem cum ut voluptas dolor,
            blanditiis commodi perferendis vel explicabo, perspiciatis eligendi
            molestias ex tempora nobis voluptatum incidunt ad asperiores!
            Perspiciatis amet, tempore consequatur enim repellat ea inventore in
            est natus quidem animi molestiae ab maiores quos minima, non
            deleniti eveniet nulla, eaque magnam voluptas modi architecto atque
            dolorum. Magni, dolor minus. Natus hic ad nihil at! Ratione
            asperiores dicta consequatur optio totam tempora delectus veniam vel
            exercitationem, cupiditate maxime cum, mollitia natus nesciunt
            consectetur recusandae temporibus voluptatum aut sequi. Obcaecati,
            dolor necessitatibus quisquam blanditiis labore ducimus numquam
            ipsum repellat excepturi laboriosam, repudiandae totam. Unde, nam
            officiis qui, optio tempore magnam exercitationem aspernatur illum
            dignissimos vero vitae eaque dolore at, pariatur explicabo in!
            Impedit repudiandae accusamus dolore eum provident dicta illum est
            vero? Est voluptatum nobis recusandae? Similique voluptas magnam
            sint, est ad repellendus quas quod amet numquam.
          </p>
        </section>
      </Element>
      <Element name="contact">
        <section className="" id="contact">
          <h2>Contact Me</h2>
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
      </Element>
      <hr />
      <Footer />
    </>
  );
}

export default Home;
