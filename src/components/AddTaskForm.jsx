import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const EMPTY_FORM = {
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
};

function AddTaskForm() {
  const { addTask } = useTasks();
  const [form, setForm] = useState(EMPTY_FORM);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  
  const isFormValid =
    form.title.trim() !== '' && form.description.trim() !== '';

  function handleSubmit(event) {
    event.preventDefault(); 
    if (!isFormValid) return; 

    addTask({
      title: form.title.trim(),
      description: form.description.trim(),
      status: form.status,
      priority: form.priority,
    });

    setForm(EMPTY_FORM); 
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a Task</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={form.title}
        onChange={handleChange}
        placeholder="e.g. Write the README"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="3"
        value={form.description}
        onChange={handleChange}
        placeholder="What needs to happen?"
      />

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button type="submit" className="submit-button" disabled={!isFormValid}>
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
