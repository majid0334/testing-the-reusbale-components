import { useState, useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Fotter from "./components/Fotter";
import "./App.module.css";

function App() {
  const [isOpen, setOpen] = useState(false);

  function handleopen() {
    setOpen(true);
  }
  
  return (
    <div className="App">
      <Navbar
        navOneLink="#"
        navTwoLink="#"
        navTreLink="#"
        naveFourLink="#"
        navFiveLink="#"
        header="Majid"
        navOne="weight"
        navTwo="city"
        navTre="age"
        navFour="height"
        navFive="location"
      />
      <Main
        headerImage="./mainImages/Rectangle.png"
        firstImage="./mainImages/Rectangle1.png"
        secondImage="./mainImages/Rectangle2.png"
        thirdImage="./mainImages/Rectangle3.png"
        fourthImage="./mainImages/Rectangle3.png"
        fiveImage="./mainImages/Rectangle4.png"
      />
      <Button onClick={handleopen}>show</Button>
      {isOpen && (
        <div>
          <h2>testing/reusble</h2>
        </div>
      )}

      <Fotter
        about="Contact us:"
        number="07xxxxxxx"
        gmail="test.test123@gmail.com"
      />
    </div>
  );
}
export default App;
