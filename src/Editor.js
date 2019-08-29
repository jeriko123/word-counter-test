import React from 'react';

function Editor({text, onTextChange}) {
  function handleChange(event) {
    onTextChange(event.target.value);
  }
  return (
    <div className="col-auto">
      <label htmlFor="editor" className="label label-default">
        Enter your Text:
      </label>
      <textarea
        className="form-control"
        value={text}
        id="editor"
        onChange={handleChange}
      />
    </div>
  );
}

export default Editor;