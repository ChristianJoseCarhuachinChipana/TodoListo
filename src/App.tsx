import { SearchBar } from '@/components/SearchBar';
import { TaskSection } from '@/components/TaskSection';
import { AddTaskButton } from '@/components/AddTaskButton';
import { Modal } from '@/components/Modal';
import { FormTask } from '@/components/FormTask';
import logo from '@/assets/todo_listo_logo.png';
import './App.css';
import { useTask } from '@/hooks/useTask';

function App() {
  const {
    searchedTasks,
    searchTask,
    setSearchTask,
    emptySearch,
    completeTask,
    deleteTask,
    addTask,
    openModal,
    setOpenModal,
  } = useTask();

  return (
    <>
      <div className="flex items-center justify-center py-2 bg-todo-listo min-h-dvh font-average-sans">
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-md px-5 md:flex-row sm:px-0">
          <img src={logo} alt="Todo Listo" className="w-40 h-auto rounded-2xl overflow-hidden" />
          <SearchBar searchTask={searchTask} setSearchTask={setSearchTask} />
          <TaskSection
            searchTask={searchTask}
            searchedTasks={searchedTasks}
            emptySearch={emptySearch}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
      <AddTaskButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <div className="flex flex-col items-center justify-center h-full">
            <FormTask setOpenModal={setOpenModal} addTask={addTask} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;
