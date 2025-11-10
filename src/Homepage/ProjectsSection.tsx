import ProjectsBox from "../components/ProjectsBox";
import ChatterBox from "../assets/ChatterBox.png";
import Cypress from "../assets/Cypress.png";
import EndoApp from "../assets/EndoApp.png";
import Noclegi from "../assets/Noclegi.png";
import WatchMate from "../assets/WatchMate.png";

function ProjectsSection() {
  return (
    <div className="h-full grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <ProjectsBox
        image={Noclegi}
        linkGh="https://github.com/sannmoon/four-corners-stays"
        linkSite="https://noclegi-cztery-katy.pl"
        title="4 Corners Stay"
        description="Featuring an integrated calendar and automatic date blocking,
        this website provides a seamless booking experience for the 4-room rental.
        Guests can easily explore room photos and amenities, and discover nearby
        attractions before securing their reservation."
      />
      <ProjectsBox
        image={ChatterBox}
        linkGh="https://github.com/sannmoon/chatterbox"
        linkSite="https://chatterbox.sandartun.my/"
        title="Chatterbox"
        description="This simple sound app is designed
        for kids with learning disabilities. The app, in Polish, helps with
        basic vocabulary, featuring essential words like pronouns and common
        actions. It’s an interactive tool for children to recognize and
        associate words with actions."
      />
      <ProjectsBox
        image={EndoApp}
        linkGh="https://github.com/sannmoon/endo-app"
        linkSite="https://endo.sandartun.my/"
        title="EndoDiet"
        description="Aimed at supporting individuals with endometriosis, this app evaluates
        food choices based on dietary needs. Users can snap a picture of food,
        and the app provides feedback on whether the food is suitable for
        someone with endometriosis, promoting healthier choices with ease."
      />

      <ProjectsBox
        image={Cypress}
        linkGh="https://github.com/sannmoon/cypress-e2e"
        title="Cypress Testing"
        description="Conducted end-to-end testing using Cypress to ensure website
        functionality and user experience remained seamless. Tests included
        input validation, navigation checks, and functional verifications, all
        aimed at identifying and resolving potential issues to maintain
        high-quality performance across different features."
      />

      <ProjectsBox
        image={WatchMate}
        linkGh="https://github.com/sannmoon/watchmate"
        linkSite="https://watchmate.sandartun.my/"
        title="WatchMate"
        description="A personal platform for movie and TV series enthusiasts to track 
        and organize favorite content. Build using Next.js and Prisma, it offers a
        user-friendly interface to manage watchlists, mark watched items."
      />
    </div>
  );
}

export default ProjectsSection;
