import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header title="My Profile Card" />
      <main className="w-full max-w-4xl mx-auto px-4">
        <Outlet />
      </main>
      <Footer year={2026} name="Gabdulkyzy Aiya" />
    </>
  );
}

export default Layout;