import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="cursor-pointer p-[2px] text-2xl text-[var(--text-color)] transition-all duration-75 hover:rounded-2xl hover:bg-amber-50 hover:text-black"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </div>
  );
}

export default DarkModeToggle;
