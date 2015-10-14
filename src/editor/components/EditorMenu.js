/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";

export default class EditorMenu extends Component {

    render() {
        return (
            <div className="editorMenu">
                <button title="Run code"
                        className="runButton"
                        onClick={()=>{this.props.onExecute()}}></button>
                <button title="Show transpiled code"
                        className="showTranspiledButton" onClick={()=>{this.props.onShowTranspiled()}}></button>
            </div>
        );
    }
}