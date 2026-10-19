import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Willkommen</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card2 />
        <Card3 />
      </div>
      <Card />
      <Card2 />
      <Card3 />
    </>
  );
}

export default App;
