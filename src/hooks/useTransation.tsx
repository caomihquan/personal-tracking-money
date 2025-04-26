import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../api/apiTransaction";
import toast from "react-hot-toast";
import useUser from "./useUser";

export function useTransations() {
  const [filter, setFilter] = useState({
    type: "all",
    fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      .toISOString()
      .split("T")[0],
    toDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      .toISOString()
      .split("T")[0],
  });
  const [sortBy, setSortBy] = useState("");
  const { user } = useUser();
  const userId = user?.email;
  const {
    isLoading,
    data: { data: transactions } = {},
    error,
  } = useQuery({
    queryKey: ["transactions", filter, sortBy, userId],
    queryFn: () => getTransactions({ filter, sortBy, userId }),
  });

  // if (filter != "all") {
  //   queryClient.prefetchQuery({
  //     queryKey: ["transactions", filter, sortBy, userId],
  //     queryFn: () => getTransactions({ filter, sortBy, userId }),
  //   });
  // }

  return {
    isLoading,
    error,
    transactions,
    filter,
    setFilter,
    sortBy,
    setSortBy,
  };
}

export function useAddTransaction() {
  const queryClient = useQueryClient();
  const { mutate: fnAddTransaction, isPending: isLoading } = useMutation({
    mutationFn: (data: any) => addTransaction(data),
    onSuccess: () => {
      toast.success(`Transaction successfully added`);
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { fnAddTransaction, isLoading };
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();
  const { mutate: fnUpdateTransaction, isPending: isLoading } = useMutation({
    mutationFn: (data: any) => updateTransaction(data),
    onSuccess: () => {
      toast.success(`Transaction successfully added`);
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { fnUpdateTransaction, isLoading };
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();
  const { mutate: fnDeleteTransaction, isPending: isLoading } = useMutation({
    mutationFn: (id: number) => deleteTransaction(id),
    onSuccess: () => {
      toast.success(`Transaction successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { fnDeleteTransaction, isLoading };
}
