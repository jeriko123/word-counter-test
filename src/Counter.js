import React from 'react';

function Counter({count}) {
  return(
    <div className="col-auto">
      <p >
        Word count: {count}
      </p>
    </div>
  );
}

export default Counter;