import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.css";

export interface Task {
  id: string;
  checked: boolean;
  message: string;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  checked,
  id,
  message,
  onCompleteTask,
  onDeleteTask,
}: Task) {
  //const [isCheck, setIsCheck] = useState(true);

  return (
    <div className={`${styles.task} ${checked ? styles.checked : ""}`}>
      <div className={styles["checkbox-wrapper-18"]}>
        <div className={styles.round}>
          <input type="checkbox" id={id} onClick={() => onCompleteTask(id)} />
          <label htmlFor={id}></label>
        </div>
      </div>

      <p>{message}</p>

      <button onClick={() => onDeleteTask(id)}>
        <Trash />
      </button>
    </div>
  );
}
