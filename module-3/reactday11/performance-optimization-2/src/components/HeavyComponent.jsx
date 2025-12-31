import React from "react";

function HeavyComponent() {
  console.log("Heavy Component Rendered");

  return (
    <div>
      <h3>This is a Heavy Component</h3>
      <p>It should render only once</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
