import { useSelector } from "react-redux";
import Task from "./TaskItem";
import { Title, ListWrapper } from "../styles";
import Loading from "./Loading";

const Finished = () => {
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;
  const finished = tasks
    .filter((task) => task.done === true)
    .map((task) => <Task key={task.id} task={task} />);

  return (
    <>
      <Title>Finished {finished.length}</Title>
      <ListWrapper>{finished}</ListWrapper>
    </>
  );
};

export default Finished;
