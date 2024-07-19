import { createStore } from 'zustand/vanilla';

type FnType = (...args: any[]) => any;

type FunctionWithPromise = (fn: FnType) => Promise<any>;

interface Step1 {
  styleId: number;
  projectName: string;
  projectContent: string;
}
export type CounterState = {
  currentStep: number;
  step1: Step1;
  [prop: string]: any;
};

export type CounterActions = {
  incrementStep: () => void;
  setStep1: (payload: Partial<Step1>) => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  currentStep: 1,
  step1: {
    styleId: 0,
    projectName: '',
    projectContent: '',
  },
};

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,

    incrementStep: () =>
      set((state) => ({ currentStep: state.currentStep + 1 })),
    setStep1: (payload: Partial<Step1>) =>
      set((state) => ({ step1: { ...state.step1, ...payload } })),
  }));
};
