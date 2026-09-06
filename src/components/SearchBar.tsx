import { Input } from '@/components/ui/input';

function SearchBar({
  searchTask,
  setSearchTask,
}: {
  searchTask: string;
  setSearchTask: (value: string) => void;
}) {
  return (
    <Input
      value={searchTask}
      onChange={(e) => {
        setSearchTask(e.target.value);
      }}
      className="bg-white focus-visible:outline-none focus-visible:ring-0 focus-visible:border-primary !text-xl p-5"
      placeholder="Buscar tarea..."
    />
  );
}

export { SearchBar };
