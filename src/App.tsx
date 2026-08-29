import { SearchBar } from '@/components/SearchBar';
import { TaskSection } from '@/components/TaskSection';
import logo from '@/assets/todo_listo_logo.png';
import './App.css';
import { useTask } from '@/hooks/useTask';

function App() {
  const { searchedTasks, searchTask, setSearchTask, completeTask, deleteTask } = useTask();

  return (
    <div className="flex items-center justify-center py-2 bg-todo-listo min-h-screen font-average-sans">
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-md md:flex-row">
        <img src={logo} alt="Todo Listo" className="w-40 h-auto rounded-2xl overflow-hidden" />
        <SearchBar searchTask={searchTask} setSearchTask={setSearchTask} />
        <TaskSection
          searchedTasks={searchedTasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
