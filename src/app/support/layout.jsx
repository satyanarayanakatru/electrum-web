import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function SupportLayout({ children }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
