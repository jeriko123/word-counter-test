import React from 'react';
import {SUCCESS, FAILURE, WAITING} from "./SaveStatus";

function AlertBox({status}) {
  if (status === FAILURE) {
    console.log('save failed!');
    return <div className="col-auto">Save failed</div>;
  } else if (status === SUCCESS) {
    console.log('save Success!');
    return <div className="col-auto">Save success</div>;
  } else if (status === WAITING) {
    console.log('saving!');
    return <div className="col-auto">Saving...</div>;
  } else {
    console.log('nothink to do');
    return null;
  }
}

export default AlertBox;