import { NavLink } from "react-router";
import DarkModeToggle from "../components/DarkModeToggle";
import useUser from "../hooks/useUser";
import Logout from "../components/Logout";

export default function Header() {
  const { isAuthenticated } = useUser();
  return (
    <header className="bg-[var(--background-primary)] shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <NavLink to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-xl font-bold text-white">
              $
            </div>
            <h1 className="ml-3 text-2xl font-bold text-[var(--text-color)]">
              MoneyTrack
            </h1>
          </div>
        </NavLink>
        <nav className="hidden space-x-8 md:flex">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/transactions"
                className="text-[var(--text-color)] hover:text-[green]"
              >
                Transactions
              </NavLink>
              {/* <NavLink
                to="/accounts"
                className="text-[var(--text-color)] hover:text-[green]"
              >
                Accounts
              </NavLink> */}
              <Logout />
            </>
          ) : (
            <NavLink
              to="/login"
              className="text-[var(--text-color)] hover:text-[green]"
            >
              Login
            </NavLink>
          )}

          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
