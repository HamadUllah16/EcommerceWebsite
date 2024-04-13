import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import ProductsPage from "./components/ProductsPage";
import SignUpNoti from "./components/SignUpNoti";

export default function Home() {
  return (
    <main className="">
      <SignUpNoti />
      <Nav />
    </main >
  );
}
