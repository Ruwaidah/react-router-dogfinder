import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes, Navigate } from "react-router-dom";
import DogDetails from "./components/DogDetails";
import { useState } from "react";

function App() {
  const [dog, setDog] = useState(null)
  console.log(dog)
  return (
    <div className="App">
      <Nav setDog={setDog}/>
      <Routes>
        <Route path="/dogs" />
        <Route path="/dogs/:dog"  element={<DogDetails dog={dog}/>} />
        <Route path="*" element={<Navigate to="/dogs" replace />} />
        {/* To keep the history clean, you should set replace prop. This will avoid extra redirects after the user click back. */}
      </Routes>
    </div>
  );
}

export default App;
