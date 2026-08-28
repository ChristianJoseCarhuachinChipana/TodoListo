import { useState } from 'react';

const tasks = [
  { title: 'Esta es mi primera tarea', completed: false },
  { title: 'Comprar leche', completed: true },
  { title: 'responder correos pendientes importantes puntuales', completed: false },
];

function useTask() {
  const [searchTask, setSearchTask] = useState('');

  let searchedTasks = [];

  if (!(searchTask.length >= 1)) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.title.toLowerCase();
      const searchText = searchTask.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  return { searchedTasks, searchTask, setSearchTask };
}

export { useTask };
