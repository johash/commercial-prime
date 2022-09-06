import Footer from "../Footer/Footer";
import Greeter from "../Greeter/Greeter";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <Greeter />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
