import React, { useState } from 'react';

const SettingsModal = ({ onSave, onClose }) => {
  const [n, setN] = useState(12); // default pile size is 25 matches
  const [m, setM] = useState(3);  // default max matches per turn is 3

  const handleSave = () => {
    onSave(n, m);  
    onClose();     
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Configure Game Settings</h2>
        <label>
          Pile Size (2n + 1): 
          <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
        </label>
        <label>
          Max Matches Per Turn (m):
          <input type="number" value={m} onChange={(e) => setM(Number(e.target.value))} />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SettingsModal;
