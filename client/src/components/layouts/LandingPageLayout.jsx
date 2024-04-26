import Navbar from "../Common/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer className="footer-container" />
    </div>
  );
};

export default Layout;
