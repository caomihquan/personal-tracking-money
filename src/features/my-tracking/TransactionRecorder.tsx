import React, { useState } from "react";
import {
  useAddTransaction,
  useDeleteTransaction,
  useTransations,
  useUpdateTransaction,
} from "../../hooks/useTransation";
import useUser from "../../hooks/useUser";
import { HiMiniChevronDown } from "react-icons/hi2";
import AddTransactionComponent from "./AddTransations";
import ListTransaction from "./ListTransation";

const TransactionRecorder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("month");
  const { user } = useUser();
  const userId = user?.email;
  const {
    isLoading,
    transactions,
    filter: activeFilter,
    setFilter: setActiveFilter,
  } = useTransations();

  const { fnAddTransaction } = useAddTransaction();
  const { fnUpdateTransaction } = useUpdateTransaction();
  const { fnDeleteTransaction } = useDeleteTransaction();

  const submitTransaction = (formData: any, onCloseModal: () => void) => {
    const dataTransaction = { ...formData, userId };
    fnAddTransaction(dataTransaction);
    console.log("Transaction submitted:", dataTransaction);
    onCloseModal();
  };

  const updateTransaction = (formData: any, onCloseModal: () => void) => {
    const dataTransaction = { ...formData, userId };
    fnUpdateTransaction(dataTransaction);
    console.log("Transaction updated:", dataTransaction);
    onCloseModal();
  };

  const deleteTransaction = (id: any, onCloseModal: () => void) => {
    if (confirm("Are you sure you want to delete this transaction?")) {
      fnDeleteTransaction(id);
      console.log("Transaction deleted:", id);
      onCloseModal();
    }
  };

  function handleFilterChange(filter: any) {
    switch (filter) {
      case "month":
        setActiveFilter({
          ...activeFilter,
          fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
            .toISOString()
            .split("T")[0],
          toDate: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0,
          )
            .toISOString()
            .split("T")[0],
        });
        break;
      case "lastmonth":
        setActiveFilter({
          ...activeFilter,
          fromDate: new Date(new Date().getFullYear(), 0, 1)
            .toISOString()
            .split("T")[0],
          toDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0)
            .toISOString()
            .split("T")[0],
        });
        break;
      case "year":
        setActiveFilter({
          ...activeFilter,
          fromDate: new Date(new Date().getFullYear(), 0, 1)
            .toISOString()
            .split("T")[0],
          toDate: new Date(new Date().getFullYear(), 11, 31)
            .toISOString()
            .split("T")[0],
        });
        break;

      case "lastyear":
        setActiveFilter({
          ...activeFilter,
          fromDate: new Date(new Date().getFullYear() - 1, 0, 1)
            .toISOString()
            .split("T")[0],
          toDate: new Date(new Date().getFullYear() - 1, 11, 31)
            .toISOString()
            .split("T")[0],
        });
        break;

      default:
        break;
    }
    setSortOrder(filter);
  }

  const calculateTotals = () => {
    let income = 0;
    let expenses = 0;

    transactions?.forEach((transaction) => {
      if (transaction.type === "income") {
        income += transaction.amount;
      } else {
        expenses += transaction.amount;
      }
    });

    return { income, expenses, balance: income - expenses };
  };

  const totals = calculateTotals();

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-[var(--text-color)]">
            Transactions
          </h2>

          {/* Summary Cards */}
          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow">
              <p className="text-sm font-medium text-gray-500">Income</p>
              <p className="text-2xl font-bold text-green-600">
                ${totals.income.toFixed(2)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <p className="text-sm font-medium text-gray-500">Expenses</p>
              <p className="text-2xl font-bold text-red-600">
                ${totals.expenses.toFixed(2)}
              </p>
            </div>
          </div>
          {/* Filter and Search */}
          <div className="mb-6 rounded-lg bg-white p-4 shadow">
            <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
              {/* Filter Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setActiveFilter({
                      ...activeFilter,
                      type: "all",
                    })
                  }
                  className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium ${
                    activeFilter?.type === "all"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() =>
                    setActiveFilter({
                      ...activeFilter,
                      type: "income",
                    })
                  }
                  className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium ${
                    activeFilter?.type === "income"
                      ? "bg-green-100 text-green-800"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Income
                </button>
                <button
                  onClick={() =>
                    setActiveFilter({
                      ...activeFilter,
                      type: "expenses",
                    })
                  }
                  className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium ${
                    activeFilter?.type === "expenses"
                      ? "bg-red-100 text-red-800"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Expenses
                </button>
              </div>

              {/* Search and Sort */}
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 md:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute top-2.5 left-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    className="appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8"
                    value={sortOrder}
                    onChange={(e) => handleFilterChange(e.target.value)}
                  >
                    <option value="month">This Month</option>
                    <option value="lastmonth">Last Month</option>
                    <option value="year">This Year</option>
                    <option value="lastyear">Last Year</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <HiMiniChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isLoading ? (
            "Loading..."
          ) : (
            <ListTransaction
              listTransations={transactions}
              updateTransaction={updateTransaction}
              deleteTransaction={deleteTransaction}
              submitTransaction={submitTransaction}
            />
          )}
        </div>
        <AddTransactionComponent submitTransaction={submitTransaction} />
      </main>
    </div>
  );
};

export default TransactionRecorder;
