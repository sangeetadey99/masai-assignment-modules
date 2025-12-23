import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const a = "Apple";
  const b = "Banana";
  const c = "Cherry";
  const d = "Date";
  const e = "Elderberry";
  const f = "Fig";

  return (
    <AppContext.Provider value={{ a, b, c, d, e, f }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
