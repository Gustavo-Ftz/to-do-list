import { Check, SquareX, Trash } from "lucide-react";

function Tasks({
  tasks,
  userTask,
  setUserTask,
  userDescription,
  setUserDescription,
  addTask,
  removeTask,
  doneTask,
}) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center text-white bg-slate-500">
        <h1 className="text-2xl mt-10 font-bold md:text-4xl">
          Gerenciador de Tarefas
        </h1>
        <div className="mt-4 min-w-[320px] p-6 rounded-lg flex flex-col bg-slate-300 gap-5 md:min-w-[500px]">
          <input
            className="p-2 rounded-lg bg-white placeholder:text-gray-500 text-sm md:text-lg text-black"
            type="text"
            placeholder="Nome da tarefa"
            value={userTask}
            onChange={(e) => setUserTask(e.target.value)}
          />
          <input
            className="p-2 rounded-lg bg-white placeholder:text-gray-500 text-sm md:text-lg text-black"
            type="text"
            placeholder="Descrição da tarefa"
            value={userDescription}
            onChange={(e) => setUserDescription(e.target.value)}
          />
          <button
            className="p-2 rounded-lg bg-slate-700 text-sm md:text-lg text-white transition-transform duration-300 hover:scale-103 cursor-pointer"
            onClick={addTask}
          >
            Adicionar
          </button>
        </div>
        <div className="mt-4 min-w-[320px] p-6 rounded-lg flex flex-col bg-slate-300 gap-5 md:min-w-[500px]">
          <ul className="flex flex-col gap-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-1 gap-25 md:p-2 bg-slate-700 rounded-lg text-sm md:text-lg ${task.isDone ? "line-through" : ""}`}
              >
                {task.name}
                <div className="flex gap-3">
                  <button
                    className={`text-white p-1 md:p-2 rounded-lg cursor-pointer ${task.isDone ? "bg-red-500" : "bg-green-500"}`}
                    onClick={() => doneTask(task.id)}
                  >
                    {task.isDone ? <SquareX /> : <Check />}
                  </button>
                  <button
                    className="text-red-600 bg-white p-1 md:p-2 rounded-lg cursor-pointer"
                    onClick={() => removeTask(task.id)}
                  >
                    <Trash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="bg-[rgb(2,14,22)] w-full text-center p-2 text-lg italic md:mt-0">
        <p className="text-white">
          <a href="https://github.com/Gustavo-Ftz/" target="_blank">
            ©Gustavo Feitoza
          </a>
        </p>
      </footer>
    </>
  );
}

export default Tasks;
