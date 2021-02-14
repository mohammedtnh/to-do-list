import { TaskWrapper } from "../styles";
import moment from "moment";
import { Checkbox, Select, MenuItem } from "@material-ui/core/";
import { useState } from "react";
import { updateTask } from "../store/actions";
import { useDispatch } from "react-redux";
import DeleteButton from "./Buttons/DeleteButton";

const TaskItem = (props) => {
  const task = props.task;
  const countDown = moment(task.deadline).endOf("day").fromNow();
  const deadline = moment(task.deadline).format("MMMM Do YYYY");
  const dispatch = useDispatch();
  const [priority, setPriority] = useState(task.priority);

  const handleCheckbox = () => {
    task.done = true;
    dispatch(updateTask(task));
  };

  const handleSelect = (event) => {
    setPriority(event.target.value);
    task.priority = event.target.value;
    dispatch(updateTask(task));
  };

  return (
    <TaskWrapper>
      <DeleteButton taskId={task.id} />
      {task.done ? (
        ""
      ) : (
        <>
          <Checkbox
            checked={false}
            onChange={handleCheckbox}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Select name="priority" value={priority} onChange={handleSelect}>
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"middle"}>Middle</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </>
      )}

      <p>{task.name}</p>
      {task.done ? deadline : countDown}
    </TaskWrapper>
  );
};

export default TaskItem;
