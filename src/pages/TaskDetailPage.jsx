import { useParams, Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const STATUS_LABELS = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
};

function TaskDetailPage() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <main className="page">
        <h1>Task not found</h1>
        <p>No task exists with the id "{id}".</p>
        <Link to="/tasks" className="back-link">
          &larr; Back to all tasks
        </Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/tasks" className="back-link">
        &larr; Back to all tasks
      </Link>

      <h1>{task.title}</h1>

      <div className="detail-badges">
        <span className={`badge status-${task.status}`}>
          {STATUS_LABELS[task.status]}
        </span>
        <span className={`badge priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <dl className="detail-fields">
        <dt>ID</dt>
        <dd>{task.id}</dd>

        <dt>Status</dt>
        <dd>{task.status}</dd>

        <dt>Priority</dt>
        <dd>{task.priority}</dd>

        <dt>Description</dt>
        <dd>{task.description || 'No description provided.'}</dd>
      </dl>
    </main>
  );
}

export default TaskDetailPage;
