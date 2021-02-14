import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/actions";
import { IconButton } from "@material-ui/core";
import { AiFillDelete } from "react-icons/ai";

const DeleteButton = ({ taskId }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(deleteTask(taskId))}
      aria-label="delete"
    >
      <AiFillDelete />
    </IconButton>
  );
};

export default DeleteButton;
