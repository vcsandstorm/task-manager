import { useTasks } from '../context/TaskContext';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

function FilterBar() {
  const { filter, setFilter } = useTasks();

  return (
    <div className="filter-bar">
      {FILTERS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={
            filter === option.value ? 'filter-button active' : 'filter-button'
          }
          onClick={() => setFilter(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
