import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Task, Task as TaskComponent } from "./components/Task";

import styles from "./App.module.css";
import { FormEvent, useState } from "react";
import { TaskEmpty } from "./components/TaskEmpty";

export function App() {
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    const id = Math.floor(Date.now() * Math.random()).toString(36);

    const task: Task = {
      id,
      checked: false,
      message,
    };

    setTasks([...tasks, task]);

    setMessage("");
  }

  function handleDeleteTask(id: string) {
    const tasksFormatted = tasks.filter((task) => task.id != id);

    setTasks(tasksFormatted);
  }

  function handleCompleteTask(id: string) {
    const tasksFormatted = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked,
        };
      } else {
        return task;
      }
    });

    setTasks(tasksFormatted);
  }

  const summary = tasks.reduce(
    (acc, current) => {
      if (current.checked) {
        acc.done++;
      }
      acc.total++;
      return acc;
    },
    {
      done: 0,
      total: 0,
    }
  );

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form onSubmit={handleCreateTask}>
          <input
            value={message}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            Criar <PlusCircle size={16} />
          </button>
        </form>

        <section className={styles.content}>
          <header>
            <Info title="Tarefas criadas" value={summary.total} color="blue" />
            <Info
              title="Concluídas"
              value={`${summary.done} de ${summary.total}`}
              color="purple"
            />
          </header>

          <main>
            {tasks.length == 0 ? (
              <TaskEmpty />
            ) : (
              tasks.map((task) => (
                <TaskComponent
                  key={task.id}
                  checked={task.checked}
                  id={task.id}
                  message={task.message}
                  onCompleteTask={handleCompleteTask}
                  onDeleteTask={handleDeleteTask}
                />
              ))
            )}
          </main>
        </section>
      </main>
    </div>
  );
}
