import React from 'react';

function SaveButton({ onClick }) {
  return (
    <button className='btn btn-dark' onClick={onClick} style={{ marginTop: 10 }}>
      Save
    </button>
  );
}

export default SaveButton;