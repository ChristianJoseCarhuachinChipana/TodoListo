import { Input } from '@/components/ui/input';

function SearchBar() {
  return (
    <Input
      className="bg-white focus-visible:outline-none focus-visible:ring-0 focus-visible:border-primary !text-xl p-5"
      placeholder="Ingrese tarea"
    />
  );
}

export { SearchBar };
