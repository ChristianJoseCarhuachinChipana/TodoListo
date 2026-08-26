import { SearchBar } from '@/components/SearchBar';
import { TaskSection } from '@/components/TaskSection';
import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center py-2 bg-neutral-100 min-h-screen">
      <div className="flex flex-wrap items-center gap-2  max-w-sm md:flex-row">
        <h1 className="text-2xl font-bold text-center w-full">Todo Listo</h1>
        <SearchBar />
        <TaskSection />
      </div>
    </div>
  );
}

export default App;
