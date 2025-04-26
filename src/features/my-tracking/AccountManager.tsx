import React, { useState } from "react";

const AccountManager: React.FC = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Cash", balance: 1000 },
    { id: 2, name: "Bank Account", balance: 5000 },
  ]);

  const addAccount = (name: string, balance: number) => {
    setAccounts([...accounts, { id: Date.now(), name, balance }]);
  };

  const deleteAccount = (id: number) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  return (
    <div>
      <h2>Account Manager</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - ${account.balance}
            <button onClick={() => deleteAccount(account.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addAccount("New Account", 0)}>Add Account</button>
    </div>
  );
};

export default AccountManager;
