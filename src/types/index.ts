export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskItemProps = {
  title: string;
  completed: boolean;
};
