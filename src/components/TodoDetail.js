import React from "react";
import { Box, Button, Stack, TextField, Checkbox } from "@mui/material";
import moment from "moment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function TodoDetail({ todo, onDelete, onUpdate}) {
  const [show, setShow] = React.useState(false);

  const [todoSelected, setTodoSelected] = React.useState(todo);

  return (
    <React.Fragment>
      <Box
        key={todo.id}
        sx={{
          border: "1px solid black",
        }}
        style={{
          paddingTop: "0.6rem",
          paddingBottom: "0.6rem",
          marginBottom: "2rem",
        }}
      >
        {/* <p>{todo.task}</p>
            <Button variant="outlined" onClick={() => setShow((prev) => !prev)}>
                Detail
            </Button>
            {show && (
                <React.Fragment>
                    <p>{todo.task}</p>
                    <p>{todo.des}</p>
                    <p>{moment(todo.date).format('MM/DD/YYYY')}</p>
                    <p>{todo.pio}</p>
                </React.Fragment>
            )} */}

      <div style={{marginTop:"1rem", marginBottom:"1rem"}}>  
        <div className="row">
            <div className="col-md-8">
                <Checkbox
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <span style={{fontSize:"20px"}}>{todo.task}</span>
            </div>
            <div className="col-md-4">
                <Button
                variant="contained"
                onClick={() => setShow((prev) => !prev)}
                style={{ background: "#00CCCC" }}
                >
                Detail
                </Button>
                <Button
                variant="contained"
                style={{ marginLeft: "1rem", background: "#CC3333" }}
                onClick={() => onDelete(todo.id)}
                >
                Remove
                </Button>
            </div>
        </div>
       </div>

        {/* {show && ( */}
        {show && (
          <React.Fragment>
            <div className="container" style={{borderTop: "1px solid black"}}>
                <h2
                style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem"
                }}
                >
                New Task
                </h2>
                <TextField
                variant="outlined"
                placeholder="Add new Task ..."
                fullWidth
                value={todoSelected.task}
                onChange={(e) =>
                    setTodoSelected((prev) => ({ ...prev, task: e.target.value }))
                  }
                />

                <h6 style={{ marginTop: "2rem" }}>Description</h6>
                <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={10}
                value={todoSelected.des}
                onChange={(e) =>
                    setTodoSelected((prev) => ({ ...prev, des: e.target.value }))
                  }
                />

                <div className="row mt-5">
                <div className="col-md-7">
                    <h6>Due Date</h6>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        minDate={dayjs(moment(new Date()).format("YYYY-MM-DD"))}
                        fullWidth
                        value={todoSelected.date}
                        onChange={(e) =>
                            setTodoSelected((prev) => ({ ...prev, date: e.target.value }))
                          }
                    />
                    </LocalizationProvider>
                </div>
                <div className="col-md-5">
                    <h6>Piority</h6>
                    <select
                    style={{
                        width: "100%",
                        padding: "1rem",
                        borderRadius: "5px"
                    }}
                    value={todoSelected.pio}
                    onChange={(e) =>
                        setTodoSelected((prev) => ({ ...prev, pio: e.target.value }))
                      }
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
                onClick={() => onUpdate(todoSelected)}
                >
                Update
                </Button>
            </div>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
}
