import toDoLogo from "../../assets/todo-icon.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />
    </header>
  );
}
