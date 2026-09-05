import { useState } from 'react';
import type { TaskItemProps } from '../types';

function useLocalStorage(itemName: string, initialValue: TaskItemProps[]) {
  const [item, setItem] = useState<TaskItemProps[]>(() => {
    const localStorageItem = localStorage.getItem(itemName);

    if (localStorageItem) {
      return JSON.parse(localStorageItem);
    }

    localStorage.setItem(itemName, JSON.stringify(initialValue));
    return initialValue;
  });

  const saveItem = (value: TaskItemProps[]) => {
    setItem(value);
    localStorage.setItem(itemName, JSON.stringify(value));
  };

  return { item, saveItem };
}

export { useLocalStorage };
