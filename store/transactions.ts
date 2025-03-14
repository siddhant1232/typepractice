import {create} from "zustand"
type Transactions = {
  id: string,
  type: "expense" | "income",
  amount:number,
};

type expenseState = {
  transactions : Transactions[],
  balance: number,
  addTransaction : (type : "income" | "expense",amount:number) => void,
}

const useexpenseStore = create<expenseState>((set)=>({
  transactions:[],
  balance:0,
  addTransaction:(type,amount)=>
    set((state) => {
      const newBalance =
        type === "income" ? state.balance + amount : state.balance - amount;
        return {
          transactions:[
            ...state.transactions,
            {id: Date.now().toString(),type,amount},
          ],
          balance:newBalance,
    } 
    })
}));
export default useexpenseStore;