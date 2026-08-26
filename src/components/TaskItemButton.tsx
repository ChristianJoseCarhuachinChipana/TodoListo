import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

function TaskItemButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Button variant="ghost" size="icon-lg" className={cn(className)}>
      {children}
    </Button>
  );
}

export { TaskItemButton };
