import "./App.css";
import List from "./components/List";
import NavBar from "./components/Navbar";
import {useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavBar search={search} searchChange={setSearch} />
      <div className="main">
      <List search={search}/>
      <div className="filters">
      <fieldset>
        <legend>Genre</legend>
       <div>
       <lable htmlFor="TV">
        <input id="TV" type="checkbox"/> TV</lable>
       </div>
       <div>
       <lable htmlFor="Movie">
        <input id="Movie" type="checkbox"/> Movie</lable>
       </div>
      
      </fieldset>
      </div>
      </div>

    </div>
  );
}

export default App;
