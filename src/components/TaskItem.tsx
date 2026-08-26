import { TaskItemButton } from '@/components/TaskItemButton';
import { Check } from 'lucide-react';
import { Trash } from 'lucide-react';

type TaskItemProps = {
  title: string;
  completed: boolean;
};

function TaskItem({ title, completed }: TaskItemProps) {
  return (
    <div className="flex items-center bg-white my-2 rounded-md">
      <div>
        <TaskItemButton className="group text-green-600 hover:text-green-400 hover:bg-transparent">
          <Check className="size-5 group-hover:scale-125 transition-transform" />
        </TaskItemButton>
      </div>

      <div className="flex-1">{title}</div>

      <div className="relative bottom-4">
        <TaskItemButton className="group text-red-600 hover:text-red-400 hover:bg-transparent">
          <Trash className="size-5 group-hover:scale-125 transition-transform" />
        </TaskItemButton>
      </div>
    </div>
  );
}

export { TaskItem };
