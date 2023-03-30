import styles from "./styles.module.css";

interface InfoProps {
  title: string;
  value: string | number;
  color: "blue" | "purple";
}

export function Info({ title, value, color }: InfoProps) {
  return (
    <div className={`${styles.info} ${styles[color]}`}>
      <p>{title}</p>
      <span>{value}</span>
    </div>
  );
}
