import { TaskItemButton } from '@/components/TaskItemButton';
import { Check } from 'lucide-react';
import { Trash } from 'lucide-react';
import type { TaskItemProps } from '@/types';

function TaskItem({
  title,
  completed,
  onCheck,
  onDelete,
}: TaskItemProps & { onCheck: () => void; onDelete: () => void }) {
  return (
    <div className="flex items-center bg-white mb-4 p-1 rounded-md">
      <div>
        <TaskItemButton
          className="group text-secondary hover:text-primary hover:bg-transparent"
          onClick={onCheck}
        >
          <Check className="size-7 group-hover:scale-125 transition-transform" />
        </TaskItemButton>
      </div>

      <div
        className={`flex-1 text-xl mx-2 ${completed ? 'line-through text-gray-400 decoration-gray-600' : ''}`}
      >
        {title}
      </div>

      <div>
        <TaskItemButton
          className="group text-red-600 hover:text-red-400 hover:bg-transparent"
          onClick={onDelete}
        >
          <Trash className="size-6 group-hover:scale-125 transition-transform" />
        </TaskItemButton>
      </div>
    </div>
  );
}

export { TaskItem };
