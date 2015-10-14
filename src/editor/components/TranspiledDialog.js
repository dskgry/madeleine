/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";
import Dialog from "../../common/Dialog";

export default class TranspiledDialog extends Component {
    render() {
        return (
            <Dialog title="Transpiled code" onClose={this.props.onClose}>
                <textArea className="showTranspiledTextArea"
                          defaultValue={this.props.transpiled}
                          disabled="disabled"/>
            </Dialog>
        );
    }
}
