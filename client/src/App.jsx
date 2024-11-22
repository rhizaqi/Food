import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Card from "./components/card";
import MainPage from "./pages/mainPage";
import MainPage2 from "./pages/mainPage2";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      
      {/* <Card/> */}
      {/* <MainPage/> */}
      <MainPage2/>
    </div>
  );
}

export default App;
