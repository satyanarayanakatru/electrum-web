import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

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
