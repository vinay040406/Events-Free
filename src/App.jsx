import { useState } from "react";
import Hero from "./Components/Hero";
import Section2 from "./Components/Section2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Section2 />
    </>
  );
}

export default App;
