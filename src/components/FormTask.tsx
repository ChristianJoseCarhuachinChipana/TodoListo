import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function FormTask({
  setOpenModal,
  addTask,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addTask: (title: string) => void;
}) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTaskTitle);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  return (
    <form className="flex flex-col gap-8 p-6 bg-white rounded-lg shadow-md" onSubmit={onSubmit}>
      <Input
        className="bg-white text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:border-primary !text-xl p-5"
        placeholder="Ingrese tu nueva tarea"
        value={newTaskTitle}
        onChange={onChange}
      />
      <div className="flex justify-between gap-2">
        <Button type="submit" className="bg-secondary text-white hover:bg-primary hover:scale-110">
          Añadir
        </Button>
        <Button
          type="button"
          className="bg-red-600 text-white hover:bg-red-400 hover:scale-110"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}

export { FormTask };
