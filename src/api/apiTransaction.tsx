import supabase from "./supabase";

export async function getTransactions({
  filter,
  userId,
}: {
  filter?: any;
  sortBy?: any;
  userId?: string;
}) {
  let query = supabase
    .from("Transaction")
    .select("*")
    .eq("userId", userId)
    .gte("date", filter.fromDate)
    .lte("date", filter.toDate)
    .order("date", {
      ascending: false,
    });

  // FILTER
  if (filter && filter?.type !== "all") {
    query = query.eq("type", filter.type);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return { data, count };
}

export async function addTransaction(transaction: any) {
  const { data, error } = await supabase
    .from("Transaction")
    .insert([transaction])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be added");
  }

  return data;
}
export async function updateTransaction(transaction: any) {
  const { data, error } = await supabase
    .from("Transaction")
    .update(transaction)
    .eq("id", transaction.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be updated");
  }

  return data;
}

export async function deleteTransaction(id: number) {
  const { error } = await supabase.from("Transaction").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be deleted");
  }
  return true;
}
