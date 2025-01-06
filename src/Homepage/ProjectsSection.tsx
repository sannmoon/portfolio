import ProjectsBox from "../components/ProjectsBox";
import Glitch from "../assets/Glitch.gif";

function ProjectsSection() {
  return (
    <div className="h-lvh grid grid-cols-3 gap-12 p-4">
      <ProjectsBox
        image={Glitch}
        link="https://github.com/sannmoon/four-corners-stays"
        title="Room Accommodation"
        description="Built for my partner's mom to support her rental business, this
          website includes a date picker feature to make room reservations
          easier. Rooms can be blocked automatically on reserved dates,
          preventing double bookings and helping with efficient booking
          management."
      />
      <ProjectsBox
        image={Glitch}
        link="https://github.com/sannmoon/cypress-e2e"
        title="Chatterbox"
        description="Created for my friend's daughter, this simple sound app is designed
        for kids with learning disabilities. The app, in Polish, helps with
        basic vocabulary, featuring essential words like pronouns and common
        actions. It’s an interactive tool for children to recognize and
        associate words with actions."
      />
      <ProjectsBox
        image={Glitch}
        link="https://github.com/sannmoon/endo-app"
        title="EndoDiet"
        description="Aimed at supporting individuals with endometriosis, this app evaluates
        food choices based on dietary needs. Users can snap a picture of food,
        and the app provides feedback on whether the food is suitable for
        someone with endometriosis, promoting healthier choices with ease."
      />

      <ProjectsBox
        image={Glitch}
        link="https://github.com/sannmoon/cypress-e2e"
        title="Cypress Testing"
        description="Conducted end-to-end testing using Cypress to ensure website
        functionality and user experience remained seamless. Tests included
        input validation, navigation checks, and functional verifications, all
        aimed at identifying and resolving potential issues to maintain
        high-quality performance across different features."
      />
      <ProjectsBox
        image={Glitch}
        link="https://github.com/sannmoon/cypress-e2e"
        title="Cypress Testing"
        description="Conducted end-to-end testing using Cypress to ensure website
        functionality and user experience remained seamless. Tests included
        input validation, navigation checks, and functional verifications, all
        aimed at identifying and resolving potential issues to maintain
        high-quality performance across different features."
      />
      <ProjectsBox
        image={Glitch}
        link="https://github.com/sannmoon/cypress-e2e"
        title="Cypress Testing"
        description="Conducted end-to-end testing using Cypress to ensure website
        functionality and user experience remained seamless. Tests included
        input validation, navigation checks, and functional verifications, all
        aimed at identifying and resolving potential issues to maintain
        high-quality performance across different features."
      />
    </div>
  );
}

export default ProjectsSection;
