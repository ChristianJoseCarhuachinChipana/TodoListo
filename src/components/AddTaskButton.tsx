import { Plus } from 'lucide-react';

function AddTaskButton({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed bottom-10 right-10">
      <button
        onClick={() => setOpenModal((state) => !state)}
        className="bg-primary-dark hover:bg-primary text-white hover:text-primary-dark p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-120"
      >
        <Plus className="size-8 group-hover:scale-125 transition-transform" />
      </button>
    </div>
  );
}

export { AddTaskButton };
