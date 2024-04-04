import { useEffect, useMemo, useState, useContext, createContext } from "react";
import { TGlobalProvider, ChildrenProvider } from "@/types";

export const initState: TGlobalProvider = {};

const GlobalContext = createContext<TGlobalProvider>(initState);

function GlobalProvider({ children }: ChildrenProvider) {
  useEffect(() => {}, []);

  const value = useMemo(() => ({}), []);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
