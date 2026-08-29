import { TaskItem } from '@/components/TaskItem';
import type { TaskItemProps } from '@/types';

function TaskSection({
  searchedTasks,
  completeTask,
  deleteTask,
}: {
  searchedTasks: TaskItemProps[];
  completeTask: (title: string) => void;
  deleteTask: (title: string) => void;
}) {
  return (
    <div className="flex flex-col w-full">
      {searchedTasks.map((task) => (
        <TaskItem
          key={task.title}
          title={task.title}
          completed={task.completed}
          onCheck={() => completeTask(task.title)}
          onDelete={() => deleteTask(task.title)}
        />
      ))}
    </div>
  );
}

export { TaskSection };
