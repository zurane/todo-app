import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markTask, deleteTask, editTask, addTask } from "../store/todoSlice";
import Snackbar from "@mui/joy/Snackbar";
import EditNoteModal from "./EditNoteModal";
import Info from "./InfoModal";

export default function TodoApp() {

  // Info pop up state
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const openInfo = () => {
    setIsInfoOpen(true);
  };

  const closeInfo = () => {
    setIsInfoOpen(false);
  };
  const state = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  // Initialize a state to listen for the input value
  const [editingId, setEditingId] = useState(null);
  // Add task state
  const [text, setText] = useState("");
  // Snackbar state
  const [snackState, setSnackState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    condition: "success",
  });

  // destructure the snackState
  const { vertical, horizontal, open, message, condition } = snackState;

  // show snackbar
  const handleClick = (newState) => {
    // set the open prop to true
    setSnackState({ ...snackState, ...newState, open: true });
  };

  // hide
  const handleClose = () => {
    // set the open prop to false
    setSnackState({ ...snackState, open: false });
  };

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask({ text }));
      // Clear the input field
      setText("");
      // Show success snack bar
      handleClick({
        message: "✓ Added a new task",
        condition: "success",
      });
    } else {
      // Show error snack bar
      handleClick({
        message: "⚠️ Input cannot be empty",
        condition: "error",
      });
    }
  };

  return (
    <div className="list-group">
      <span className="counter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="#abc6ff"
        >
          <path d="M421-324.92 677.08-581l-23.7-23.46L421-371.31 304.08-488.23l-22.7 23.46L421-324.92ZM480.13-120q-74.44 0-139.79-28.34t-114.48-77.42q-49.13-49.08-77.49-114.37Q120-405.42 120-479.87q0-74.67 28.34-140.41 28.34-65.73 77.42-114.36 49.08-48.63 114.37-76.99Q405.42-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.44-28.34 139.79t-76.92 114.48q-48.58 49.13-114.26 77.49Q554.81-120 480.13-120Z" />
        </svg>
        <div className="badge">{state.length}</div>
      </span>
      {/* Add task */}
      <div className="add-task">
        <div className="input-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 -960 960 960"
            width="25px"
            fill="#D3D4D7"
          >
            <path d="M160-269.23v-40h400v40H160ZM160-460v-40h640v40H160Zm0-190.77v-40h640v40H160Z" />
          </svg>
          <input
            type="text"
            value={text}
            placeholder="Add a new task..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button onClick={handleAdd}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Heading with a counter */}
      <div className="title">
      <p>My current tasks</p>
      <span className="info">
       <button onClick={openInfo} title="User instructions">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#77aaff"
        >
          <path d="M464.05-300h33.85v-220h-33.85v220Zm15.94-274.97q9.5 0 16.01-6.32 6.51-6.31 6.51-16.04 0-9.79-6.5-16.23-6.5-6.44-16-6.44-10.01 0-16.27 6.44-6.25 6.44-6.25 16.23 0 9.73 6.5 16.04 6.5 6.32 16 6.32Zm.32 454.97q-75.01 0-140.33-28.34-65.33-28.34-114.29-77.25-48.96-48.92-77.32-114.23Q120-405.14 120-480.2q0-74.55 28.34-140.18 28.34-65.63 77.25-114.26 48.92-48.63 114.23-76.99Q405.14-840 480.2-840q74.55 0 140.18 28.34 65.63 28.34 114.26 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.31q0 75.01-28.34 140.33-28.34 65.33-76.92 114.16-48.58 48.84-114.26 77.33Q554.81-120 480.31-120Z" />
        </svg>
       </button>
      </span>
      </div>
      <ul>
        {state.map((todo) => (
          <div className="todo-item todo-content" key={todo.id}>
            {/* Checkbox to mark the task */}
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => dispatch(markTask({ id: todo.id }))}
              />
              <li
                className="task-list-item"
                style={{
                  // If isCompleted is true
                  textDecoration: todo.isComplete ? "line-through" : "none",
                  opacity: todo.isComplete ? 0.5 : 1,
                }}
              >
                <div>{todo.content}</div>
              </li>
            </div>
            {/* Action Buttons */}
            {!todo.isComplete && (
              <div className="btns">
                <button onClick={() => setEditingId(todo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#BDBDBD"
                  >
                    <path d="M224.62-160q-27.62 0-46.12-18.5Q160-197 160-224.62v-510.76q0-27.62 18.5-46.12Q197-800 224.62-800h335.46l-40 40H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v510.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-299.53l40-40v339.53q0 27.62-18.5 46.12Q763-160 735.38-160H224.62ZM480-480Zm-80 80v-104.62l357.77-357.76q6.61-6.62 13.92-9.16t15.39-2.54q7.54 0 14.73 2.54t13.04 8.39L859.31-820q6.38 6.62 9.69 14.58 3.31 7.96 3.31 16.04 0 8.07-2.43 15.26-2.42 7.2-9.03 13.81L500.77-400H400Zm432.54-388.62-44.46-46.76 44.46 46.76ZM440-440h43.69l266.62-266.62-21.85-21.84-24.38-23.39L440-487.77V-440Zm288.46-288.46-24.38-23.39 24.38 23.39 21.85 21.84-21.85-21.84Z" />
                  </svg>
                </button>
                <button onClick={() => dispatch(deleteTask({ id: todo.id }))}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FF3A2E"
                  >
                    <path d="M304.62-160q-26.85 0-45.74-18.88Q240-197.77 240-224.62V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.38q0 27.62-18.5 46.12Q683-160 655.38-160H304.62ZM680-720H280v495.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h350.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-720ZM392.31-280h40v-360h-40v360Zm135.38 0h40v-360h-40v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
        {/* End of Action buttons */}

        {/* Info modal pop up*/}
        {isInfoOpen && <Info close={closeInfo} />}


        {editingId !== null && (
          <EditNoteModal
            todo={state.find((todo) => todo.id === editingId)}
            onClose={() => setEditingId(null)}
            onSave={(newTaskContent) => {
              dispatch(editTask({ id: editingId, newTaskContent }));
              setEditingId(null);
            }}
          />
        )}
      </ul>
      {/* Snack bar */}
      <Snackbar
        key={vertical + horizontal}
        style={{ borderRadius: "3px", backgroundColor: "#ffffff" }}
        variant="outlined"
        color={condition === "success" ? "success" : "danger"}
        size="sm"
        open={open}
        onClose={handleClose}
        animationDuration={300}
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
      >
        {message}
      </Snackbar>
    </div>
  );
}
