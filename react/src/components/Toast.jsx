import React, { useState, useEffect } from 'react';

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#28a745',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      zIndex: 1000,
      animation: 'slideIn 0.3s ease-out'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>✓</span>
        <span>{message}</span>
        <button 
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast;