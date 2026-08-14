import { useTasks } from "../hooks/useTasks";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Hero from "../components/dashboard/Hero";
import Stats from "../components/dashboard/Stats";
import TaskList from "../components/dashboard/TaskList";

function Dashboard() {
  const {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
    changeStatus,
  } = useTasks();

  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <Header />

        <Hero onCreateTask={addTask} />

        <Stats tasks={tasks} />

        <TaskList
          tasks={tasks}
          loading={loading}
          error={error}
          onDelete={removeTask}
          onStatusChange={changeStatus}
        />

      </main>

    </div>
  );
}

export default Dashboard;