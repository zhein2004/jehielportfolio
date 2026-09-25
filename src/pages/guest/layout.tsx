import { Outlet } from "react-router";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

function GuestLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default GuestLayout;