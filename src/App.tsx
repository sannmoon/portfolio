import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import chic from "./assets/chic.jpg";
import ProjectsSection from "./Homepage/ProjectsSection";
import AboutSection from "./Homepage/AboutSection";
import SkillsSection from "./Homepage/SkillsSection";
import ExperienceSection from "./Homepage/ExperienceSection";
import MainSection from "./Homepage/MainSection";
import Sansantopia_Rev from "./assets/Sansantopia_Rev.png";
import Contact from "./components/Contact";
import Navi from "./assets/Navi.wav";
import HomeClick from "./assets/HomeClick.mp3";
import Cursor from "./components/Cursor";

function App() {
  const [selectedPopup, setSelectedPopup] = useState("home");

  useEffect(() => {
    let audio = new Audio(Navi);
    if (selectedPopup === "home") {
      audio = new Audio(HomeClick);
    }

    audio.play();
  }, [selectedPopup]);

  return (
    <div
      className={`bg-[#16163e] h-lvh bg-cover bg-no-repeat bg-center ${
        selectedPopup !== "projects" ? "vertical-lines" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), url(${chic})`,
      }}
    >
      <Cursor />
      <Navigation
        setSelectedPopup={setSelectedPopup}
        selectedPopup={selectedPopup}
      />
      <div className="h-lvh">
        {selectedPopup === "home" ? (
          <MainSection />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="absolute left-1/2 top-1/2 mt-[35px] transform -translate-x-1/2 -translate-y-1/2 w-[97%] md:w-3/4 text-[28px] text-pink-300 flex justify-center items-center h-[85%]">
              <img
                src={Sansantopia_Rev}
                className="relative slide-in-elliptic-top-fwd h-full"
              />

              <div className="absolute overflow-scroll slide-in-elliptic-top-fwd ml-[19px] mr-[18px] max-w-[70%] top-[70px] bottom-[20px] m-16">
                {selectedPopup === "about" && <AboutSection />}
                {selectedPopup === "projects" && <ProjectsSection />}
                {selectedPopup === "skills" && <SkillsSection />}
                {selectedPopup === "experience" && <ExperienceSection />}
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:block absolute left-auto right-0 top-[55%] -translate-y-1/2">
          <Contact />
        </div>
      </div>
    </div>
  );
  {
  }
}
export default App;
