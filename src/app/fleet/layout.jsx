import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

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
