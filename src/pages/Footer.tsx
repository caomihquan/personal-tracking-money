export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-2 md:mb-0">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl font-bold text-green-600">
                $
              </div>
              <h3 className="ml-3 text-xl font-bold">MoneyTrack</h3>
            </div>
            <p className="my-2 text-gray-400">
              Your personal finance companion.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-2 text-center text-gray-400">
          <p>© {currentYear} MoneyTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
