import { Outlet } from "react-router";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateLayout() {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );
  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main
        style={{ flexGrow: 1, overflowY: "auto" }}
        className="bg-[var(--color-bg)]"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
