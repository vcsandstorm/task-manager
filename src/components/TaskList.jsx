import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const STATUS_LABELS = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
};

function TaskList() {
  const { filteredTasks, deleteTask } = useTasks();

  if (filteredTasks.length === 0) {
    return <p className="empty">No tasks match this filter.</p>;
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li key={task.id} className="task-row">
          <Link to={`/tasks/${task.id}`} className="task-title">
            {task.title}
          </Link>

          <span className={`badge status-${task.status}`}>
            {STATUS_LABELS[task.status]}
          </span>

          <span className={`badge priority-${task.priority}`}>
            {task.priority}
          </span>

          <button
            type="button"
            className="delete-button"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
