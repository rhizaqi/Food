import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Card from "./components/card";
import MainPage from "./pages/mainPage";
import MainPage2 from "./pages/mainPage2";
import CardMenu from "./components/CardMenu";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      
      {/* <Card/> */}
      {/* <MainPage/> */}
      <MainPage2/>
      {/* <CardMenu/> */}
    </div>
  );
}

export default App;
