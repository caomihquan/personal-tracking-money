import Modal from "../../components/Modal";
import FormTransaction from "./FormTransaction";
import UpdateFormTransaction from "./UpdateFormTransaction";

export default function ListTransaction({
  listTransations,
  updateTransaction,
  deleteTransaction,
  submitTransaction,
}: any) {
  const getCategoryIcon = (category: any) => {
    const icons = {
      Food: "🍽️",
      Transportation: "🚗",
      Entertainment: "🎬",
      Utilities: "💡",
      Shopping: "🛍️",
      Health: "🏥",
      Education: "📚",
      Salary: "💼",
      Investments: "📈",
      Gifts: "🎁",
      Refunds: "↩️",
      "Side Hustle": "💸",
      Other: "📋",
    } as any;
    return icons[category] || "💵";
  };
  const formatDate = (dateString: string) => {
    const options = {
      year: "numeric" as const,
      month: "short" as const,
      day: "numeric" as const,
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="space-y-3">
      {listTransations!.length > 0 ? (
        listTransations!.map((transaction: any) => (
          <Modal>
            <Modal.Open opens="cabin-update">
              <div
                key={transaction.id}
                className="cursor-pointer overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-md"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg">
                        {getCategoryIcon(transaction.category)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {transaction.description}
                        </h3>
                        <div className="mt-1 flex flex-wrap text-xs text-gray-500">
                          <span className="mr-2">
                            {formatDate(transaction.date)}
                          </span>
                          <span className="mr-2">•</span>
                          <span className="mr-2">{transaction.category}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-medium ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Open>
            <Modal.Window name="cabin-update">
              <UpdateFormTransaction
                updateTransaction={updateTransaction}
                deleteTransaction={deleteTransaction}
                transaction={transaction}
              />
            </Modal.Window>
          </Modal>
        ))
      ) : (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <p className="text-gray-500">No transactions found.</p>
          <Modal>
            <Modal.Open opens="cabin-add">
              <button className="mt-4 cursor-pointer rounded-md bg-green-600 px-4 py-2 text-white hover:opacity-80">
                Add Transaction
              </button>
            </Modal.Open>
            <Modal.Window name="cabin-add">
              <FormTransaction submitTransaction={submitTransaction} />
            </Modal.Window>
          </Modal>
        </div>
      )}
    </div>
  );
}
