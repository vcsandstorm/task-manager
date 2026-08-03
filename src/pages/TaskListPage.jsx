import FilterBar from '../components/FilterBar';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { useTasks } from '../context/TaskContext';

function TaskListPage() {
  const { tasks, filteredTasks } = useTasks();

  return (
    <main className="page">
      <h1>Tasks</h1>
      <FilterBar />
      <p className="task-count">
        Showing {filteredTasks.length} of {tasks.length} tasks
      </p>
      <TaskList />
      <AddTaskForm />
    </main>
  );
}

export default TaskListPage;
