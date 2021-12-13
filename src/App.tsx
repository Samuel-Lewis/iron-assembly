import "./App.less";
import React from "react";
import {
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Chicken little</h1>
      <Link to="/">Home</Link>
      <Link to="/members">Members</Link>

      <Outlet />
    </div>
  );
}

export default App;
