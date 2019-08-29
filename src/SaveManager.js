import React from "react";
import SaveButton from './SaveButton';
import {SUCCESS, FAILURE, WAITING, IDLE} from "./SaveStatus";
import AlertBox from './AlertBox';

class SaveManager extends React.Component {

  constructor() {
    super();
    this.state={saveStatus: IDLE};
  }

  save(event) {
    event.preventDefault();
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

export default SaveManager;