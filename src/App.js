// import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React , {useState, useMemo}from "react";
import { Stack, TextField, Button } from "@mui/material";
import { v4 as uuid } from "uuid";

import AddTodo from "./components/AddTodo";
import TodoDetail from "./components/TodoDetail";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [listTodo, setListTodo] = React.useState([]);

  const handleDelete = (id) => {
    setListTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdate = (todoSelected) => {
    const index = listTodo.findIndex((item) => item.id === todoSelected.id);
    const newList = listTodo;
    newList[index] = {
      ...todoSelected,
      task: todoSelected.task,
      des:  todoSelected.des,
      date: todoSelected.date, 
      pio: todoSelected.pio
    }; 
    setListTodo([...newList]);
  };
  
  const handleAdd = (todo) => {
    if (todo) {
      setListTodo((prev) => [
        ...prev,
        {
          id: uuid(),
          task: todo.task,
          des: todo.des,
          date: todo.date,
          pio: todo.pio,
        },
      ]);
      console.log(listTodo);
    }
  };

  // search 

  const [searchValue, setSearchValue] = React.useState("");

   const listTodoFilter = React.useMemo(() => {
    return [
      ...listTodo.filter((todo) =>
        todo.task.toLowerCase().includes(searchValue.toLowerCase())
      ),
    ];
  }, [searchValue, listTodo]);
  // -------------------------search ----------------------

  return (
    <div className="container-fluid row">
      <div className="col-md-5" style={{ border: "1px solid black" }}>
        <AddTodo onSubmit={handleAdd} />
      </div>
      <div className="col-md-7" style={{ border: "1px solid black" }}>
        <h2
          style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}
        >
          To Do List
        </h2>
            <TextField
              style={{marginBottom:"2rem"}}
              placeholder="Search ..."
              variant="outlined"
              fullWidth
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
        {listTodoFilter.map((todo) => (
          <TodoDetail todo={todo} onDelete={handleDelete} onUpdate={handleUpdate}/>
        ))}

        <footer className="row" style={{background:"lightgrey", padding:"2rem", border:"1px solid black"}}>
          <div className="col-md-8">
            <span>Bulk Action: </span>
          </div>
          <div className="col-md-4">
            <Button variant="contained" color="primary">Done</Button>
            <Button variant="contained" style={{ marginLeft: "1rem", background: "#CC3333" }} onClick={() => setListTodo([])}>Remove</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
