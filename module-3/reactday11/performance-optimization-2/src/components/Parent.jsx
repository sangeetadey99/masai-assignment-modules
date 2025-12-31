import { useState, Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React.memo & Lazy Loading</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default Parent;
