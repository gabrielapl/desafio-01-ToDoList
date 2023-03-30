import styles from "./styles.module.css";
import clipboardIcon from "../../assets/clipboard.svg";

export function TaskEmpty() {
  return (
    <div className={styles.taskEmpty}>
      <img src={clipboardIcon} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
