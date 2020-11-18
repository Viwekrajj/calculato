import React from "react";
import { connect } from "react-redux";

import {
    mapDispatchToProps,
    mapStateToProps,
} from "../viewConnectors/vcDenofProjects";


interface DenofProjectsViewProps {
    readonly dopState: any;
    readonly result: any;
    readonly res: () => void;
    readonly var1: (val: any) => void;
    readonly var2: (val: any) => void;
    readonly oper: (val: any) => void
}

class DenofProjects extends React.PureComponent<DenofProjectsViewProps> {
    state = {
        val1: "",
        val2: ""
    };

    change1 = (e: any) => {
        this.setState({
            val1: e.target.value
        });
        
    };
    change2 = (e: any) => {
        this.setState({
            val2: e.target.value
        });
        
    };

    add=()=>{
        this.props.var1(this.state.val1);
        this.props.var2(this.state.val2);
        this.props.oper('+')
    }
    sub=()=>{
        this.props.var1(this.state.val1);
        this.props.var2(this.state.val2);
        this.props.oper('-')
    }
    mult=()=>{
        this.props.var1(this.state.val1);
        this.props.var2(this.state.val2);
        this.props.oper('*')
    }
    div=()=>{
        this.props.var1(this.state.val1);
        this.props.var2(this.state.val2);
        this.props.oper('/')
    }
   

    render() {
        return (
            <React.Fragment>
                <div className="calc-app">
                    <div className="container">
                        result--   {this.props.dopState.result}
                        
                        <input type="text" value={this.state.val1} onChange={this.change1} placeholder="enter ur 1st no"></input>
                        <input type="text" value={this.state.val2} onChange={this.change2} placeholder="enter ur 2nd no"></input>
                        <div className="keypad">
                            
                            
                            <button onClick={this.add}>+</button>
                            
                            <button onClick={ this.sub}>-</button>
                            <button onClick={this.div}>/</button>
                            <button onClick={this.mult}>*</button>
                            <button onClick={() => this.props.res()}>=</button>
                            

                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}







export default connect(mapStateToProps, mapDispatchToProps)(DenofProjects);
