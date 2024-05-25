import Footer from "../../moderncomponents/footer";
import Navbar from "../../moderncomponents/navbar";

export default function FleetLayout({ children }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
