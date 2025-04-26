import { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

const FormTransaction: React.FC<{
  submitTransaction: any;
  onCloseModal?: () => void;
}> = ({ submitTransaction, onCloseModal }) => {
  const [transactionType, setTransactionType] = useState("expense");
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: getCurrentDate(),
    description: "",
  });
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, type: transactionType }));
  };
  const categories =
    transactionType === "expense"
      ? [
          "Food & Dining",
          "Transportation",
          "Housing",
          "Entertainment",
          "Utilities",
          "Shopping",
          "Health",
          "Education",
          "Other",
        ]
      : ["Salary", "Investments", "Gifts", "Refunds", "Side Hustle", "Other"];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-lg">
        {/* Modal body */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitTransaction(formData, onCloseModal!);
          }}
          className="w-[500px] p-2"
        >
          {/* Transaction Type Toggle */}
          <div className="mb-6">
            <div className="flex">
              <button
                type="button"
                className={`w-1/2 cursor-pointer rounded-l-md px-4 py-2 text-sm font-medium focus:outline-none ${
                  transactionType === "expense"
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setTransactionType("expense")}
              >
                Expense
              </button>
              <button
                type="button"
                className={`w-1/2 cursor-pointer rounded-r-md px-4 py-2 text-sm font-medium focus:outline-none ${
                  transactionType === "income"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setTransactionType("income")}
              >
                Income
              </button>
            </div>
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <div className="relative mt-1 w-full rounded-md shadow-sm">
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="0.00"
                className="block w-full [appearance:textfield] rounded-md border border-gray-300 py-2 pr-12 pl-2 focus:border-green-500 focus:ring-green-500 focus:outline-none sm:text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={formData.amount}
                onChange={handleChange}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">VND</span>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pe-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none sm:text-sm"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <HiMiniChevronDown />
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none sm:text-sm"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none sm:text-sm"
              placeholder="Add details about this transaction"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center justify-end space-x-3">
            <button
              type="button"
              className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
              onClick={() => onCloseModal!()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`cursor-pointer rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${
                transactionType === "expense"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              } focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                transactionType === "expense"
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
            >
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTransaction;
