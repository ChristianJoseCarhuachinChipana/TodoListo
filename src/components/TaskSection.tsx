import { TaskItem } from '@/components/TaskItem';

const tasks = [
  { title: 'Esta es mi primera tarea', completed: false },
  { title: 'Comprar leche', completed: true },
  { title: 'responder correos pendientes importantes puntuales', completed: false },
];

function TaskSection() {
  return (
    <div className="flex flex-col w-full">
      {tasks.map((task) => (
        <TaskItem key={task.title} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
}

export { TaskSection };
