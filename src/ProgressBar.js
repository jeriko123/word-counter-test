import React from 'react';

function ProgressBar({completion}) {
  const percentage = completion * 100;
  return (
    <div className="col-auto">
      <label htmlFor="progress" className="label label-default">
        Progress:
      </label>
      <div className="progress">
        <div className="progress-bar" id="progress" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
      {/*<progress value={completion} id="progress" >*/}
      {/*{percentage}%*/}
      {/*</progress>*/}
    </div>
  );
}

export default ProgressBar;