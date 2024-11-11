import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Card from "./components/card";
import MainPage from "./pages/mainPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <Card/>
      {/* <MainPage/> */}
    </div>
  );
}

export default App;
