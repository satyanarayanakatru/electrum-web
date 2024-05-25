import Footer from "../../moderncomponents/footer";
import Navbar from "../../moderncomponents/navbar";

export default function ContactLayout({ children }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
