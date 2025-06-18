type Props = { isActive?: boolean };

const line =
  "block w-[30px] h-[2px] bg-[#fe50b1] my-2 mx-auto transition-all duration-300 ease-in-out";
function MenuIcon({ isActive = false }: Props) {
  return (
    <div
      className={`group cursor-pointer ${isActive ? "is-active" : ""}`}
      id="hamburger-1"
    >
      <span
        className={`${line} ${isActive ? "rotate-45 translate-y-[10px]" : ""}`}
      ></span>
      <span className={`${line} ${isActive ? "opacity-0" : ""}`}></span>
      <span
        className={`${line} ${
          isActive ? "-rotate-45 -translate-y-[10px]" : ""
        }`}
      ></span>
    </div>
  );
}

export default MenuIcon;
