import { Task } from "../models/models";

interface Props {
  tasks: Task[];
}

export const TaskBanner = ({ tasks }: Props) => {
  const todos = tasks.filter((t) => !t.done).length;
  return (
    <h4
      className={
        "text-white text-center p-4" +
        (todos === 0 ? " bg-success" : " bg-primary")
      }
    >
      Tasks App ({todos} tasks to do)
    </h4>
  );
};
