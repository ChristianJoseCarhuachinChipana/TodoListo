import { useState } from 'react';
import type { TaskItemProps } from '../types';
import { useLocalStorage } from './useLocalStorage';
/*
const tasks: TaskItemProps[] = [
  { title: 'Esta es mi primera tarea', completed: false },
  { title: 'Comprar leche', completed: true },
  { title: 'responder correos pendientes importantes puntuales', completed: false },
];
*/
function useTask() {
  const { item: myTasks, saveItem: setMyTasks } = useLocalStorage('TASKS_V1', []);
  const [searchTask, setSearchTask] = useState('');
  const [openModal, setOpenModal] = useState(false);

  let searchedTasks: TaskItemProps[] = [];

  if (!(searchTask.length >= 1)) {
    searchedTasks = myTasks;
  } else {
    searchedTasks = myTasks.filter((task) => {
      const taskText = task.title.toLowerCase();
      const searchText = searchTask.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  function completeTask(title: string) {
    const updatedTasks = myTasks.map((task) => {
      if (task.title === title) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setMyTasks(updatedTasks);
  }

  function deleteTask(title: string) {
    const updatedTasks = myTasks.filter((task) => task.title !== title);
    setMyTasks(updatedTasks);
  }

  function addTask(title: string) {
    const newTask: TaskItemProps = { title, completed: false };
    setMyTasks([...myTasks, newTask]);
  }

  return {
    searchedTasks,
    searchTask,
    setSearchTask,
    completeTask,
    deleteTask,
    addTask,
    openModal,
    setOpenModal,
  };
}

export { useTask };
