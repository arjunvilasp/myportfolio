import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div>
      <Header/>
     <section id="HeroSection">
        <HeroSection/>
     </section>
     <section id="ProfileSection">
        ProfileSection
     </section>
     <section id="ProjectsSection">
        ProjectsSection
     </section>
     <section id="Footer">
        Footer
     </section>
    </div>
  );
}

export default App;
