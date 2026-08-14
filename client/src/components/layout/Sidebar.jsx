function Sidebar() {
  return (
    <aside className="sidebar">

      <h1>Nexa</h1>

      <nav>

        <button className="active">
          Dashboard
        </button>

        <button>
          Tasks
        </button>

        <button>
          Analytics
        </button>

        <button>
          Settings
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;