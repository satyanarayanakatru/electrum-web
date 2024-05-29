import Footer from "../../moderncomponents/footer";
import Navbar from "../../moderncomponents/navbar";

export default function BlogLayout({ children }) {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
