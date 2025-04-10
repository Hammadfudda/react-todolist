function FilterButton({ filter, setFilter }) {
    return (
      <div>
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? "bg-teal-600 text-white" : "bg-teal-100"} p-2 m-2 rounded-sm`}>
          All
        </button>
        <button onClick={() => setFilter("pending")} className={`${filter === "pending" ? "bg-teal-600 text-white" : "bg-teal-100"} p-2 m-2 rounded-sm`}>
          Pending
        </button>
        <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "bg-teal-600 text-white" : "bg-teal-100"} p-2 m-2 rounded-sm`}>
          Completed
        </button>
      </div>
    );
  }
  
  export default FilterButton;