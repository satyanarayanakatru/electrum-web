
import Navbar from "../../moderncomponents/navbar";
import Footer from "../../moderncomponents/footer";

export default function SingleFamilyUnitLayout({ children }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
