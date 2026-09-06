function EmptyItem({ searchTask }: { searchTask: string }) {
  return <p className="text-gray-500">No se encuentra la tarea "{searchTask}"</p>;
}

export { EmptyItem };
