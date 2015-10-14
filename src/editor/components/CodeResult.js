/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";

export default class CodeResult extends Component {
    render() {
        let {executionContext} = this.props;
        let outputContentClass = executionContext.fail ? "fail outputContent" : "outputContent";
        let loading = this.props.loading ? <div className="loading"></div> : null;
        return (
            <div className="codeResult">
                {loading}
                <div className="outputHeader">Output</div>
                <div className={outputContentClass}>
                    {executionContext.errorMessage}
                    {executionContext.resultOutput ? executionContext.resultOutput.map((output, i)=> {
                        return (<div key={i}>{output}</div>);
                    }) : null}
                </div>
            </div>
        );
    }
}