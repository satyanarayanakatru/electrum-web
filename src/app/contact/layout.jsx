import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

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
