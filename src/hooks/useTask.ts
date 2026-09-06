import { useState } from 'react';
import type { TaskItemProps } from '../types';
import { useLocalStorage } from './useLocalStorage';

function useTask() {
  const { item: myTasks, saveItem: setMyTasks } = useLocalStorage('TASKS_V1', []);
  const [searchTask, setSearchTask] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const searchedTasks: TaskItemProps[] = !(searchTask.length >= 1)
    ? myTasks
    : myTasks.filter((task) => {
        const taskText = task.title.toLowerCase();
        const searchText = searchTask.toLowerCase();
        return taskText.includes(searchText);
      });

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

  const emptySearch = searchedTasks.length === 0 && searchTask.length > 0;

  return {
    searchedTasks,
    searchTask,
    setSearchTask,
    emptySearch,
    completeTask,
    deleteTask,
    addTask,
    openModal,
    setOpenModal,
  };
}

export { useTask };
