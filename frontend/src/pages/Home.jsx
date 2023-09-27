import Navbar from "../components/Common/Navbar";
import Overlay from "../components/Common/Overlay";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Overlay />
      <h1>Home</h1>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default Home;
