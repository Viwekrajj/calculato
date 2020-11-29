import React from "react";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../viewConnectors/vcDenofProjects";

interface DenofProjectsViewProps {
  readonly dopState: any;
  readonly onInputChange: (e: any) => any;
  readonly onOper: (e:any) => any;
  readonly onReset: () => void;

}

class DenofProjects extends React.Component<DenofProjectsViewProps> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
       <input
          type="text"
          id="firstNumber"
          value={this.props.dopState.number1}
          placeholder="Enter first number"
          onChange={this.props.onInputChange}
        />
        <input
          type="text"
          id="secondNumber"
          value={this.props.dopState.number2}
          placeholder="Enter second number"
          onChange={this.props.onInputChange}
        />
        <button id="sum" onClick={this.props.onOper}>Sum</button>
        <button id="sub" onClick={this.props.onOper}>Sub</button>
        <button id="mult" onClick={this.props.onOper}>Mult</button>
        <button id="div" onClick={this.props.onOper}>Div</button>
        <button  onClick={this.props.onReset}>Reset</button>



        <div>{this.props.dopState.result}</div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DenofProjects);
