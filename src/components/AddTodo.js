import React from "react";
import { TextField, Stack, Button, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import moment from "moment";

export default function AddTodo({ onSubmit }) {

  const [todo, setTodo] = React.useState({
      task: '',
      des: '',
      date: dayjs(moment(new Date()).format('MM/DD/YYYY')),
      pio: '',
  });

  return (
    <React.Fragment>
      <h2
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}
      >
        New Task
      </h2>
      <TextField
        variant="outlined"
        placeholder="Add new Task ..."
        fullWidth
        value={todo.task}
        onChange={(e) => {
            setTodo((prev) => ({ ...prev, task: e.target.value }));
        }}
      />

      <h6 style={{ marginTop: "2rem" }}>Description</h6>
      <TextField variant="outlined" fullWidth multiline rows={10} 
        value={todo.des}
        onChange={(e) => {
            setTodo((prev) => ({ ...prev, des: e.target.value }));
        }}
      />

      <div className="row mt-5">
        <div className="col-md-7">
          <h6>Due Date</h6>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              minDate={dayjs(moment(new Date()).format("MM/DD/YYYY"))}
              fullWidth
              value={todo.date}
              onChange={(value) =>
              setTodo((prev) => ({
                  ...prev,
                      date: value,
                  }))
              }
            />
          </LocalizationProvider>
        </div>
        <div className="col-md-5">
          <h6>Piority</h6>
          <select
            style={{ width: "100%", padding: "1rem", borderRadius: "5px" }}
              name="pio"
              onChange={(e) => {
                setTodo((prev) => ({ ...prev, pio: e.target.value }));
            }}
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <Button
        variant="contained"
        fullWidth
        style={{
          background: "#68B984",
          color: "white",
          marginTop: "5rem",
          marginBottom: "8rem"
        }}
        onClick={() => onSubmit(todo)}
      >
        Add
      </Button>
    </React.Fragment>
  );
}
