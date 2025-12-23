import AppContextProvider from "./AppContext";
import Component2 from "./Component2";

function Component1() {
  return (
    <AppContextProvider>
      <Component2 />
    </AppContextProvider>
  );
}

export default Component1;
