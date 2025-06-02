import Header from "./sections/Header";
import HeroSection from "./sections/Hero";
import Services from "./sections/Services"
import Footer from "./sections/Footer";
import Articles from "./sections/Articles";

function App() {

  // I will have to add an event handler to listen for the change in the windows width...

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
