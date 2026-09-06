import { TaskItem } from '@/components/TaskItem';
import { EmptyItem } from '@/components/EmptyItem';
import type { TaskItemProps } from '@/types';

function TaskSection({
  searchTask,
  searchedTasks,
  emptySearch,
  completeTask,
  deleteTask,
}: {
  searchTask: string;
  searchedTasks: TaskItemProps[];
  emptySearch: boolean;
  completeTask: (title: string) => void;
  deleteTask: (title: string) => void;
}) {
  return (
    <div className="flex flex-col w-full">
      {emptySearch ? (
        <EmptyItem searchTask={searchTask} />
      ) : (
        searchedTasks.map((task) => (
          <TaskItem
            key={task.title}
            title={task.title}
            completed={task.completed}
            onCheck={() => completeTask(task.title)}
            onDelete={() => deleteTask(task.title)}
          />
        ))
      )}
    </div>
  );
}

export { TaskSection };
