import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import chic from "./assets/chic.jpg";
import noise from "./assets/noise.gif";
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
    let audio;
    if (
      selectedPopup === "about" ||
      selectedPopup === "projects" ||
      selectedPopup === "skills" ||
      selectedPopup === "experience"
    ) {
      audio = new Audio(Navi);
    } else if (selectedPopup === "home") {
      audio = new Audio(HomeClick);
    }

    if (audio) {
      audio.play();
    }
  }, [selectedPopup]);

  return (
    <div
      className="bg-[#16163e] h-lvh bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), url(${chic})`,
      }}
    >
      <Cursor />
      <Navbar
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
            <div
              className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 text-[28px] text-pink-300 flex justify-center items-center h-[85%]`}
            >
              <img
                src={Sansantopia_Rev}
                className="relative slide-in-elliptic-top-fwd h-full"
              />

              <div
                className={`absolute overflow-scroll aspect-[3/2] p-14 slide-in-elliptic-top-fwd`}
                style={{
                  clipPath:
                    "polygon(4% 7%, 6% 4%, 94% 3%, 97% 7%, 96% 92%, 92% 99%, 7% 98%, 3% 92%, 3% 71%, 5% 70%, 5% 63%, 3% 60%, 4% 8%)",
                  backgroundImage: `linear-gradient(rgba(0, 13, 33, .88), rgb(65 13 68 / 88%)), url(${noise})`,
                  marginLeft: "19px",
                  marginRight: "18px",
                  top: "27px",
                  bottom: "20px",
                }}
              >
                {selectedPopup === "about" && <AboutSection />}
                {selectedPopup === "projects" && <ProjectsSection />}
                {selectedPopup === "skills" && <SkillsSection />}
                {selectedPopup === "experience" && <ExperienceSection />}
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0">
          <Contact />
        </div>
      </div>
    </div>
  );
  {
  }
}
export default App;
