const initialState = {
  tasks: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return {
        ...state,
        tasks: action.payload.tasks,
        loading: false,
      };
    case "CREATE_TASK":
      const { newTask } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case "DELETE_TASK":
      return {
        ...state,
        task: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    case "UPDATE_TASK":
      const { updatedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
