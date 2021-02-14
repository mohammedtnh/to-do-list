import { useSelector } from "react-redux";
import Task from "./TaskItem";
import { Title, ListWrapper } from "../styles";
import Loading from "./Loading";

const Unfinished = () => {
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;
  const unfinished = tasks
    .filter((task) => task.done === false)
    .map((task) => <Task key={task.id} task={task} />);

  return (
    <>
      <Title>Unfinished {unfinished.length}</Title>
      <ListWrapper>{unfinished}</ListWrapper>
    </>
  );
};

export default Unfinished;
