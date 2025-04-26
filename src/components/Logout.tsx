import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../hooks/useLogout";
function Logout() {
  const { logout } = useLogout();

  function handleLogout() {
    if (confirm("Are you sure you want to log out?")) {
      logout();
    }
  }

  return (
    <div
      className="cursor-pointer p-[2px] text-2xl text-[var(--text-color)] transition-all duration-75 hover:rounded-2xl hover:bg-amber-50 hover:text-black"
      onClick={handleLogout}
    >
      <HiArrowRightOnRectangle />
    </div>
  );
}

export default Logout;
