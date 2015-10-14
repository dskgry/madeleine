/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";
import AceEditor from "react-ace";
import Brace from "brace";
import * as JSMode from "brace/mode/javascript";
import * as StyleMode from "brace/theme/ambiance";


const EDITOR_NAME = "madeleineEditor";

export default class CodeEditor extends Component {

    receiveCode() {
        let newCode = ace.edit(EDITOR_NAME).getValue();
        this.props.onReceiveCode(newCode);
    }

    render() {
        let {code} = this.props;
        return (
            <div className="editorWrapper">
                <AceEditor
                    width="100%"
                    height="100%"
                    theme="ambiance"
                    name={EDITOR_NAME}
                    value={code}
                    onBlur={()=>{this.receiveCode()}}
                    editorProps={{$blockScrolling: Infinity}}
                    mode="javascript"/>
            </div>
        );
    }
}