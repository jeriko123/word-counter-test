import React from 'react';

function makeFakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.1) {
        resolve('Success!');
      } else {
        reject('Failure!');
      }
    }, 1000)
  });
}

export default makeFakeRequest;