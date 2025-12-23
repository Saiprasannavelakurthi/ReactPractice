import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

function Component1() {
  const a = 10;
  const b = 20;
  const c = 30;
  const d = 40;
  const e = 50;
  const f = 60;

  return (
    <AppContext.Provider value={{ a, b, c, d, e, f }}>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
