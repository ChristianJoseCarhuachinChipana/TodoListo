import { TaskItem } from '@/components/TaskItem';
import type { TaskItemProps } from '@/types';

function TaskSection({ searchedTasks }: { searchedTasks: TaskItemProps[] }) {
  return (
    <div className="flex flex-col w-full">
      {searchedTasks.map((task) => (
        <TaskItem key={task.title} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
}

export { TaskSection };
