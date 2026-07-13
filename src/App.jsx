import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import ValeursPage from "./components/Values.jsx";
import EquipePage from "./components/Team.jsx";
import FormulesPage from "./components/Offers.jsx";
import FaqPage from "./components/Faq.jsx";
import ContactPage from "./components/Contact.jsx";
import Eligibilite from "./components/Eligibilite.jsx";

import Footer from "./components/Footer.jsx";
import MentionsLegales from "./components/LegalPage.jsx";

// Remet le scroll en haut a chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valeurs" element={<ValeursPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/formules" element={<FormulesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/eligibilite" element={<Eligibilite />} />
          <Route path="*" element={<Home />} />

          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
