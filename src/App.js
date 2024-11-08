import "./App.css";
import AddItems from "./components/AddItems";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import SearchItem from "./components/SearchItem";

function App() {
  const [task, setTask] = useState("");

  const [search, setSearch] = useState("");

  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Playing Cricket",
    },
    {
      id: 2,
      checked: false,
      item: "Reading Books",
    },
    {
      id: 3,
      checked: false,
      item: "Meet with Friends",
    },
  ]);

  return (
    <div
      className="App container-fluid d-flex justify-content-center align-items-center flex-column p-0"
      style={{ minHeight: "550px", backgroundColor: "#86469c" }}
    >
      <Header />

      <div className="row">
        <div className="col-12 mt-5">
          <AddItems
            items={items}
            setItems={setItems}
            task={task}
            setTask={setTask}
          />
          <SearchItem search={search} setSearch={setSearch} />
        </div>
        <div className="col-12">
          <Content items={items.filter(item=>item.item.toLowerCase().includes(search.toLowerCase()))} setItems={setItems} />
        </div>
      </div>

      <Footer items={items} setItems={setItems} />
    </div>
  );
}

export default App;
