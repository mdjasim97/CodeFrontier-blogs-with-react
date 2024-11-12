import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
