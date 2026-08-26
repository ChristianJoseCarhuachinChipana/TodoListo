import { Input } from '@/components/ui/input';

function SearchBar() {
  return (
    <Input
      className="bg-white focus-visible:outline-none focus-visible:ring-0 focus-visible:border-transparent"
      placeholder="Ingrese tarea"
    />
  );
}

export { SearchBar };
