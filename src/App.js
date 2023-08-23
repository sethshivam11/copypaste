import { useState, useLayoutEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const prefersNotSet = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
  useLayoutEffect(() => {
    if (prefersDark) {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    }
    if (prefersLight) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    if (prefersNotSet) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    // eslint-disable-next-line
  }, []);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled.", "Success, ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled.", "Success, ");
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
    } else {
      document.body.style.backgroundColor = "#e50101";
      document.body.style.color = "white";
      showAlert("Color changed to Red.", "Success, ");
    }
  };
  const greenColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#124012";
      showAlert("Color changed to Green.", "Success, ");
    } else {
      document.body.style.backgroundColor = "#0c950c";
      document.body.style.color = "white";
      showAlert("Color changed to Green.", "Success, ");
    }
  };
  const blueColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#0b2447";
      showAlert("Color changed to Blue.", "Success, ");
    } else {
      document.body.style.backgroundColor = "#0c55ba";
      document.body.style.color = "white";
      showAlert("Color changed to Blue.", "Success, ");
    }
  };
  const blackColor = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#F6BE00";
      showAlert("Color changed to Yellow.", "Success, ");
    } else {
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
      showAlert("Color changed to Yellow.", "Success, ");
    }
  };

  return (
    <div>
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
            exact
            path="/"
            element={
              <TextForm
                heading="Try Text Utils | Word Counter | Character Counter"
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            path="*"
            element={
              <TextForm
                heading="Try Text Utils | Word Counter | Character Counter"
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
