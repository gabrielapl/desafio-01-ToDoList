import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.css";

export interface Task {
  id: string;
  checked: boolean;
  message: string;
}

interface TaskProps {
  data: Task;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ data, onCompleteTask, onDeleteTask }: TaskProps) {
  //const [isCheck, setIsCheck] = useState(true);

  return (
    <div className={`${styles.task} ${data.checked ? styles.checked : ""}`}>
      <div className={styles["checkbox-wrapper-18"]}>
        <div className={styles.round}>
          <input
            type="checkbox"
            id={data.id}
            onClick={() => onCompleteTask(data.id)}
          />
          <label htmlFor={data.id}></label>
        </div>
      </div>

      <p>{data.message}</p>

      <button onClick={() => onDeleteTask(data.id)}>
        <Trash />
      </button>
    </div>
  );
}
