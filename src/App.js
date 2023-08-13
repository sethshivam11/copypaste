import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Light Mode has been enabled.", "Success, ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode has been enabled.", "Success, ");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const redColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#850f02";
      showAlert("Color changed to Red.", "Success, ");
    }
  };
  const greenColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#124012";
      showAlert("Color changed to Green.", "Success, ");
    }
  };
  const blueColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#0b2447";
      showAlert("Color changed to Blue.", "Success, ");
    }
  };
  const blackColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#000000";
      showAlert("Color changed to Black.", "Success, ");
    }
  };

  return (
    <div>
      <Router>
        <Navbar
          title="Text Utils"
          li2="About Us"
          mode={mode}
          toggleMode={toggleMode}
          greenColor={greenColor}
          blueColor={blueColor}
          redColor={redColor}
          blackColor={blackColor}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter your text below"
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
