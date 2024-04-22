import Nav from "./components/Nav";
import ProductsPage from "./components/ProductsPage";
import SignUpNoti from "./components/SignUpNoti";
import LandingScreen from "./components/LandingScreen";
import BrandsPanel from "./components/BrandsPanel";
import Categories from "./components/Categories";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <SignUpNoti /> */}
      <Nav />
      <LandingScreen />
      <BrandsPanel />
      <ProductsPage title={"New Arrivals"} />
      <hr></hr>
      <ProductsPage title={"Top Selling"} />
      <Categories />
      <CustomerReviews />
      <Footer />
    </>
  );
}
