import Header from "./sections/Header";
import HeroSection from "./sections/Hero";
import Services from "./sections/Services"
import Footer from "./sections/Footer";
import Articles from "./sections/Articles";

function App() {

  return (
    <div className="text-base relative overflow-hidden bg-[url('/src/assets/bg-intro-mobile.svg')] bg-no-repeat bg-contain bg-top md:bg-none">
    <Header />
    <main>
      <HeroSection />
      <Services />
      <Articles />
    </main>
    <Footer />
    </div>
  )
}

export default App
