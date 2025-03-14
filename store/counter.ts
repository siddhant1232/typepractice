// import { create } from 'zustand';
// import {persist} from "zustand/middleware"

// type counter = {
//   count:number,
//   increment:()=> void;
//   decrement:()=> void;
// }

// const useCounter = create<counter>()(
//  persist(
//   (set) => ({
//     count:0,
//     increment:() => set((state)=>({count: state.count+1})),
//     decrement:() => set((state)=>({count:state.count-1})),
//   }),
//   {
//     name: 'counter-storage',
//   }
//  )
// );

// export default useCounter;



import {create} from "zustand"
import { persist } from "zustand/middleware";

type Counter ={
  count : number,
  increment : () => void;
  decrement :() => void;
}

const useCounter = create<Counter>()(
  persist(
  (set) => ({
    count : 0,
    increment : () => set((state) =>({count: state.count + 1})),
    decrement : () => set((state) => ({count: state.count -1})),
  }),
  {
    name: "chutiya",
  }
));

export default useCounter;