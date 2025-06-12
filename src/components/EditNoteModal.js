// src/components/EditTodoModal.js
import React, { useState } from "react";

const EditNoteModal = ({ todo, onClose, onSave }) => {
  // Edit text modal state
  const [newText, setNewText] = useState(todo.content);

  const handleSave = () => {
    // remove whitespace from the string
    if (newText.trim()) {
      onSave(newText);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Task</h2>
          <button className="close-button" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="save-button" onClick={handleSave}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
