import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
} from "@material-ui/core/";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { createTask } from "../store/actions";

const TaskForm = () => {
  const [open, setOpen] = useState(false);
  const [deadline, setDeadline] = useState(new Date());
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    name: "",
    priority: "low",
    deadline: deadline,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleDate = (date) => {
    setDeadline({ ...task, deadline: date });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTask(task));
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" size="large" onClick={handleClickOpen}>
        Add Task
      </Button>

      <Dialog fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>Add a Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Task"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <InputLabel id="deadline-label">Deadline</InputLabel>
          <DatePicker
            margin="dense"
            labelId="deadline-label"
            name="deadline"
            selected={task.deadline}
            onSelect={handleDate}
            onChange={handleDate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="small" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} size="small" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default TaskForm;
