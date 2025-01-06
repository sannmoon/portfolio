import TextScramble from "../components/TextScramble";

function MainSection() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center w-full">
      <div>
        <div className="p-7 text-[50px]">
          <TextScramble text="ASPIRING FULLSTACK DEVELOPER " />
        </div>
        <div className="text-[30px] text-pink-200">
          Once crunching numbers, now crafting code! <br />
          On a mission to build engaging apps with React and share my love for
          technology,
          <br /> one line of code at a time ✨
        </div>
      </div>
    </div>
  );
}

export default MainSection;
