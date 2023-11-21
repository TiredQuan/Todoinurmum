const TodoComponent = ({ id, todo, done, onDelete, onDone }) => {
  return (
    <div key={id}>
      <div className="left">
        <div>
          <p>{id + 1}:</p> <p>{todo}</p>
          {/* {editBool ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onEdit(id, editInput);
                setEditBool(!editBool);
              }}
            >
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <p>{todo}</p>
          )} */}
        </div>
        <p>Status: {done ? "Done" : "Undone"}</p>
      </div>
      <div className="right">
        <a href="#" onClick={onDone}>
          {done ? "Checked" : "Check"}
        </a>
        <a href="#" onClick={onDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};

export default TodoComponent;
