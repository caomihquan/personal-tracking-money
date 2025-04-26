import { NavLink } from "react-router";
import Footer from "../../pages/Footer";
import Header from "../../pages/Header";
import useUser from "../../hooks/useUser";

export default function Dashboard() {
  const { isAuthenticated } = useUser(); // Assuming useUser is a custom hook that provides authentication status
  return (
    <div className="bg-[var(--color-bg)]">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-10 md:mb-0 md:w-1/2 md:pr-8">
            <h2 className="mb-6 text-4xl font-bold text-[var(--text-color)]">
              Take Control of Your Finances
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Track expenses, manage budgets, and achieve your financial goals
              with our simple yet powerful personal finance tool.
            </p>
            <div className="flex space-x-4">
              <NavLink to="/transactions">
                <button className="cursor-pointer rounded-md bg-green-600 px-6 py-3 text-white hover:bg-green-700">
                  Start Tracking
                </button>
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="./images/main.png"
              alt="Financial dashboard preview"
              className="max-h-[300px] rounded-lg shadow-xl md:min-w-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[var(--text-color)]">
            How MoneyTrack Helps You
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-[var(--border-app)] bg-[var(--color-bg)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <div className="h-6 w-6 rounded-sm bg-green-600"></div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--text-color)]">
                Expense Tracking
              </h3>
              <p className="text-[var(--text-color)]">
                Easily log and categorize all your expenses to see where your
                money goes.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border-app)] bg-[var(--color-bg)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <div className="h-6 w-6 rounded-full bg-blue-600"></div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--text-color)]">
                Budget Planning
              </h3>
              <p className="text-[var(--text-color)]">
                Create customized budgets for different spending categories and
                track your progress.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border-app)] bg-[var(--color-bg)] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <div className="h-6 w-6 rounded-md bg-purple-600"></div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--text-color)]">
                Financial Insights
              </h3>
              <p className="text-[var(--text-color)]">
                Get visual reports and analytics that help you understand your
                financial habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-16 text-[var(--text-color)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-600">
                Create your free account in less than a minute.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Connect Accounts</h3>
              <p className="text-gray-600">
                Securely link your bank accounts or track manually.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Set Budgets</h3>
              <p className="text-gray-600">
                Define your spending limits for different categories.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                4
              </div>
              <h3 className="mb-2 text-xl font-semibold">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your spending and savings goals in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold text-[var(--text-color)]">
            What Our Users Say
          </h2>
          <div className="rounded-lg bg-gray-50 p-8 shadow-sm">
            <p className="mb-6 text-xl text-gray-600 italic">
              "MoneyTrack has completely changed how I manage my finances. I've
              saved over $3,000 in just six months by following the budgeting
              tools."
            </p>
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div className="ml-4 text-left">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-500">Marketing Professional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isAuthenticated && (
        <section className="bg-green-600 py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Start Managing Your Money Today
            </h2>
            <p className="mb-8 text-xl">
              Join thousands of users who have improved their financial health
              with MoneyTrack.
            </p>
            <button className="rounded-md bg-white px-8 py-4 font-bold text-green-600 hover:bg-gray-100">
              Sign Up Now
            </button>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}
