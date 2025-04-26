import Modal from "../../components/Modal";
import FormTransaction from "./FormTransaction";

export default function AddTransactionComponent({ submitTransaction }: any) {
  return (
    <div className="fixed right-6 bottom-6">
      <Modal>
        <Modal.Open opens="cabin-form">
          <button className="rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <FormTransaction submitTransaction={submitTransaction} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
