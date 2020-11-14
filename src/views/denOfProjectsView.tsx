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
    readonly num: (val: any) => void;
    readonly oper: (val: any) => void
}

class DenofProjects extends React.PureComponent<DenofProjectsViewProps> {
    state = {
        val: ""

    };

    change = (e: any) => {
        this.setState({
            val: e.target.value
        });
    };
    med = () => {
        this.props.num(this.state.val);

        this.clr();

    }
    clr = () => {
        this.setState({
            val: ""
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="calc-app">
                    <div className="container">
                        result--   {this.props.result}
                        
                        <input type="text" value={this.state.val} onChange={this.change}></input>
                        <div className="keypad">
                            <button onClick={this.med}>submit</button>
                            <button onClick={() => this.props.res()}>res</button>
                            <button onClick={() => { this.props.oper('+') }}>+</button>
                            <button onClick={() => { this.props.oper('-') }}>-</button>
                            <button onClick={() => { this.props.oper('/') }}>/</button>
                            <button onClick={() => { this.props.oper('*') }}>*</button>
                            

                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}







export default connect(mapStateToProps, mapDispatchToProps)(DenofProjects);
