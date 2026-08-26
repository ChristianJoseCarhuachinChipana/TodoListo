import { SearchBar } from '@/components/SearchBar';
import { TaskSection } from '@/components/TaskSection';
import logo from '@/assets/todo_listo_logo.png';
import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center py-2 bg-todo-listo min-h-screen font-average-sans">
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-md md:flex-row">
        <div className="rounded-2xl overflow-hidden">
          <img src={logo} alt="Todo Listo" className="w-40 h-auto" />
        </div>
        <SearchBar />
        <TaskSection />
      </div>
    </div>
  );
}

export default App;
