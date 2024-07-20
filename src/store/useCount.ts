import { create } from "zustand";

interface CountStore {
  count: number;
  incrementNumber: number;
  setIncrementNumber: Function;
  getCount: Function;
  onePlus: Function;
  oneMinus: Function;
  increment: Function;
  decrement: Function;
  reset: Function;
}

const useCount = create<CountStore>((set, get) => ({
  count: 0,
  incrementNumber: 1,
  setIncrementNumber: (num: number) =>
    set(() => ({
      incrementNumber: Number(num)
    })),
  getCount: () => get().count,
  onePlus: () => get().count + 1,
  oneMinus: () => get().count - 1,
  reset: () => set(() => ({ count: 0 })),
  increment: () =>
    set((state) => ({ count: state.count + state.incrementNumber })),
  decrement: () =>
    set((state) => ({ count: state.count - state.incrementNumber }))
}));

export default useCount;
