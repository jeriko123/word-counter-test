const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const WAITING = 'WAITING';
const IDLE = 'IDLE';

function Counter({count}) {
  return(
    <div className="col-auto">
    <p >
      Word count: {count}
    </p>
    </div>
  );
}

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

function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}

function SaveButton({ onClick }) {
  return (
    <button className='btn btn-dark' onClick={onClick} style={{ marginTop: 10 }}>
      Save
    </button>
  );
}

function AlertBox({status}) {
  if (status === FAILURE) {
    return <div className="col-auto">Save failed</div>;
  } else if (status === SUCCESS) {
    return <div className="col-auto">Save success</div>;
  } else if (status === WAITING) {
    return <div className="col-auto">Saving...</div>;
  } else {
    return null;
  }
}

function makeFakeRequest() {
  return new Promise((resolve, reejct) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve('Success!');
      } else {
        reject('Failure!');
      }
    }, 2000)
  });
}

class SaveManager extends React.Component {

  constructor() {
    super();
    this.state={saveStatus: IDLE};
  }

  save(event) {
  event.prevenDefault();
  this.setState(() => ({ saveStatus: WAITING }));
  this.props
    .saveFunction(this.props.data)
    .then(
      success => this.setState(() => ({ saveStatus: SUCCESS})),
      failure => this.setState(() => ({ saveStatus: FAILURE}))
    );
  }

  render() {
    return(
      <div className='row'>
        <div className='col-auto'>
          <SaveButton onclick={this.save.bind(this)}/>
        </div>
        <div className='col-auto'>
          <AlertBox status={this.state.saveStatus}/>
        </div>
      </div>
    )
  }

}

class  WordCounter extends React.Component {
  constructor() {
    super();
    this.state = {text: ''};
    // this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(curentText) {
    this.setState(() => ({text: curentText}));
  }

  render() {
    const {text} = this.state;
    const {targetWordCount} = this.props;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;
    return (
      <form>
        <div className="form-group" style={{maxWidth: '400px', margin: '2rem auto 0 auto'}}>
          <Editor
            onTextChange={this.handleTextChange.bind(this)}
            text={text}
          />
          <Counter count={wordCount}/>
          <ProgressBar completion={progress}/>
          <SaveManager saveFunction={makeFakeRequest} data={this.state} />
        </div>
      </form>
    );
  }
}
ReactDOM.render(
  <WordCounter  targetWordCount={10} />,
  document.getElementById("app")
);