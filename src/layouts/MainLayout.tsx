import Footer from "../pages/Footer";
import Header from "../pages/Header";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow p-4"></main>
      <Footer />
    </div>
  );
}

export default MainLayout;
