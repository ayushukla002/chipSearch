// Chip.jsx
import React from 'react';
import './Chip.css';

const Chip = ({ label, onRemove }) => (
  <div className="chip">
    {label} <span onClick={onRemove}>X</span>
  </div>
);

export default Chip;
