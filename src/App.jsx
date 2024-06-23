import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProfileSection from "./Components/Profile/ProfileSection";
import ProjectsSection from "./Components/Projects/ProjectsSection";
import SkillsSection from "./Components/Skills/SkillsSection";

function App() {
  return (
    <div className="main-conntainer">
      <Header/>
     <section id="HeroSection">
        <HeroSection/>
     </section>
     <section id="ProfileSection">
        <ProfileSection/>
     </section>
     <section id="SkillsSection">
       <SkillsSection/>
     </section>
     <section id="ProjectsSection">
         <ProjectsSection/>
     </section>
     <section id="Footer">
        <Footer/>
     </section>
    </div>
  );
}

export default App;
