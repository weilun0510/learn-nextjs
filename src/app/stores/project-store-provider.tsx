import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { type CounterStore, createCounterStore } from './project-store';

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined,
);

export interface ProjectStoreProviderProps {
  children: ReactNode;
}

export const ProjectStoreProvider = ({
  children,
}: ProjectStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useProjectStore = <T,>(
  selector: (store: CounterStore) => T,
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useProjectStore must be used within ProjectStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
