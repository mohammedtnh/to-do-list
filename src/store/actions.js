import axios from "axios";
// ACTION TYPES
const FETCH_TASKS = "FETCH_TASKS";
const DELETE_TASK = "DELETE_TASK";
const CREATE_TASK = "CREATE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/tasks/");
      dispatch({
        type: FETCH_TASKS,
        payload: { tasks: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId: taskId },
      });
    } catch (error) {
      console.log(`DELETE Request Error: ${error}`);
    }
  };
};

export const createTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/tasks/`, newTask);
      dispatch({
        type: CREATE_TASK,
        payload: { newTask: res.data },
      });
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};

export const updateTask = (updatedTask) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `http://localhost:8000/tasks/${updatedTask.id}`,
        updatedTask
      );
      dispatch({
        type: UPDATE_TASK,
        payload: { updatedTask: updatedTask },
      });
    } catch (error) {
      console.log(`PUT Request Error: ${error}`);
    }
  };
};
