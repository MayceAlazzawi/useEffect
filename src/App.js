import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");

  useEffect(() => {
    fetch(`https://randomuser.me/api/?gender=${gender}`)
      .then((data) => data.json())
      .then((data) => setName(data.results[0].name.first));
  }, [gender]);

  return (
    <div className="App">
      <p>Hello {name}</p>
      <input
        type="checkbox"
        onChange={(e) => setGender(e.target.checked ? "male" : "female")}
      />
      Male
    </div>
  );
}

export default App;

// useEffect(() => {
//   fetch(`https://randomuser.me/api/?gender=${gender}`)
//     .then((data) => data.json())
//     .then((data) => setName(data.results[0].name.first));
// }, []);

{
  /* <input
        type="checkbox"
        onChange={(e) => setGender(e.target.checked ? "male" : "female")}
      />
      Male */
}
