import { createContext, useContext, useReducer } from 'react';
import { taskReducer, initialState } from '../reducer/taskReducer';

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tasks, filter } = state;

 
  const filteredTasks =
    filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);

  
  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: { ...task, id: Date.now() },
    });
  }

  function deleteTask(id) {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }

  function setFilter(nextFilter) {
    dispatch({ type: 'SET_FILTER', payload: nextFilter });
  }

  const value = { tasks, filteredTasks, filter, addTask, deleteTask, setFilter };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}


export function useTasks() {
  const context = useContext(TaskContext);
  if (context === null) {
    throw new Error('useTasks must be used inside a TaskProvider');
  }
  return context;
}

export default TaskContext;
