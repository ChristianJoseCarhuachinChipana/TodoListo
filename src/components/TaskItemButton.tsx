import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

function TaskItemButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button variant="ghost" size="icon-lg" className={cn(className)} onClick={onClick}>
      {children}
    </Button>
  );
}

export { TaskItemButton };
