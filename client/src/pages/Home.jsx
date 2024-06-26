import Overlay from "../components/Common/Overlay";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import ProductPreview from "../components/Product/ProductPreview";

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
      <Header />
      <ProductPreview />

      <Element name="about" id="about" className="text-center">
        <section className="py-7 px-4 rounded-sm">
          {/* ADD IMG */}
          <h2 className="text-center text-3xl pb-2">Our Story</h2>
          <p className="text-lg font-semibold leading-snug">
            {/* 150 */}
            Lorem ipsum. dolor sit amet consectetur adipisicing elit. Corporis,
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
    </>
  );
}

export default Home;
