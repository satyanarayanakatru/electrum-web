import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function PublicLayout({ children }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
