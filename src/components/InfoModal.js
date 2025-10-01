import React from "react";

const Info = ({ close }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Instructions</h2>
          <button className="close-button" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000"
            >
              <path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="content">
            <h3>To-Do App User Instructions</h3>
            <p>Follow these simple steps to manage your tasks efficiently:</p>
            <h4>Adding a New Task</h4>
            <ol>
              <li>
                <strong>Input a Task:</strong> Locate the input field at the top
                of the app labeled "Add a new task..." and type your task
                description into the input field.
              </li>
              <li>
                <strong>Add the Task:</strong> Press the <strong>Enter</strong>
                key on your keyboard, or click the <strong>Add</strong> button
                (a plus sign icon) next to the input field. If the input field
                is empty and you attempt to add a task, an error message will be
                displayed.
              </li>
            </ol>
            <h4>Viewing Your Tasks</h4>
            <p>
              Your tasks will be listed below the input field. The number of
              current tasks is displayed next to the heading "My current tasks."
            </p>
            <h4>Marking a Task as Complete</h4>
            <ol>
              <li>
                <strong>Check the Box:</strong> Click the checkbox next to a
                task to mark it as complete. The task will be visually updated
                (strikethrough and lower opacity).
              </li>
            </ol>
            <h4>Editing a Task</h4>
            <ol>
              <li>
                <strong>Open Edit Mode:</strong> Click the <strong>Edit</strong>
                button (a pencil icon) next to the task you want to edit.
              </li>
              <li>
                <strong>Edit and Save:</strong> Modify the task description in
                the provided modal and click <strong>Save</strong> to apply the
                changes.
              </li>
            </ol>
            <h4>Deleting a Task</h4>
            <ol>
              <li>
                <strong>Delete the Task:</strong> Click the
                <strong>Delete</strong> button (a trash can icon) next to the
                task you want to remove.
              </li>
            </ol>
            <h4>Notifications</h4>
            <p>
              The app will display notifications at the bottom of the screen to
              confirm actions like adding a new task or alerting you when the
              input field is empty.
            </p>
            <p>
              By following these instructions, you should be able to easily
              manage your tasks using the To-Do App. Enjoy staying organized!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
