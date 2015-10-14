/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as EditorActions from "./../EditorActions";
import * as ExercisesActions from "../../exercises/ExercisesActions";
import BindActions from "../../infrastructure/BindActions";
import EditorMenu from "./EditorMenu";
import CodeEditor from "./CodeEditor";
import CodeResult from "./CodeResult";
import TranspiledDialog from "./TranspiledDialog";
import overrideConsole from "../OverrideConsole";


@BindActions(EditorActions)
class EditorControllerView extends Component {

    componentDidMount() {
        //register console-override as action creator
        overrideConsole(this.getActions().updateConsole);
        //register global error handler that logs to error console
        window.onerror = (e)=> {
            this.getActions().executionFailed(e);
        };
    }

    componentDidUpdate() {
        let {executing, transpiledCode} = this.props.executionContext;
        if (executing && transpiledCode != null) {
            try {
                eval(transpiledCode);
                this.getActions().executionFinished();
            } catch (e) {
                this.getActions().executionFailed(e);
            }
        }
    }

    render() {
        const {code, executionContext, showTranspiledCode, loading} = this.props;
        const transpiledDialog = showTranspiledCode ?
            <TranspiledDialog
                transpiled={executionContext.transpiledCode}
                onClose={this.getActions().hideTranspiledCode}/> : null;

        return (
            <div className="codeEditor">
                <EditorMenu onExecute={this.getActions().executeCode}
                            onShowTranspiled={this.getActions().showTranspiledCode}/>
                <CodeEditor code={code} onReceiveCode={this.getActions().receiveCode}/>
                <CodeResult loading={loading} executionContext={executionContext}/>
                {transpiledDialog}
            </div>
        );
    }
}

export default connect((state)=> {
    return state.EditorReducer;
})(EditorControllerView);

