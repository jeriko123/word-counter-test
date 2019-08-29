import React from 'react';
import Counter from './Counter';
import ProgressBar from './ProgressBar';
import Editor from './Editor';
import makeFakeRequest from './makeFakeRequest';
import countWords from './countWords';
import SaveManager from './SaveManager';


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

export default WordCounter;