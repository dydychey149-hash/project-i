import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ListBar from "./components/navbar.jsx";
import Portfolio from "./components/portfolio.jsx";
import Main from "./components/mains.jsx";
import AllDrinks from "./components/AllDrinks.jsx";
import TopDrinks from "./components/TopDrinks.jsx";
import FavoriteDrinks from "./components/FavoriteDrinks.jsx";
import Water from "./components/vater.jsx";
import Services from "./components/service.jsx";
import Contact from "./components/Contact.jsx";
import Sales from "./components/Sales.jsx";
import Auth from "./components/Auth.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function ScrollRevealObserver() {
    const { pathname } = useLocation();

    useEffect(() => {
        const elements = document.querySelectorAll("[data-scroll-reveal]");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
function App() {
    return (
        <BrowserRouter basename={import.meta.env.PROD ? import.meta.env.BASE_URL : "/"}>
            <ScrollRevealObserver />
            <ListBar />
            <Routes>
                <Route path="/"element={<><Portfolio /><Main /></>}/>
                <Route path="/all-drinks" element={<AllDrinks />} />
                <Route path="/top-drinks" element={<TopDrinks />} />
                <Route path="/favorite-drinks" element={<FavoriteDrinks />}/>
                <Route path="/water" element={<Water />} />
                <Route path="/service" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth />} />
                <Route path="/product" element={<AllDrinks />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;