import Header from "./components/Header.jsx";
import HeroSection from "./components/Hero.jsx";
import Services from "./components/Services.jsx"
import Footer from "./components/Footer.jsx";
import Articles from "./components/Articles.jsx";

function App() {

  return (
    <div className="text-base relative overflow-hidden">
    <Header />
    <HeroSection />
    <Services />
    <Articles />
    <Footer />
    </div>
  )
}

export default App
