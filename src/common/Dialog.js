/**
 * @author Sven Koelpin
 */

import React from "react";

class Dialog extends React.Component {
    static propTypes = {
        onClose: React.PropTypes.func.isRequired,
        title: React.PropTypes.string.isRequired
    };

    componentWillMount() {
        window.document.body.className = "noScroll";
    }

    componentWillUnmount() {
        window.document.body.className = "";
    }

    render() {
        let {children, title, onClose} = this.props;
        return (
            <div className="modal dialog-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={onClose} type="button" className="close">
                                <span>x</span>
                            </button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dialog;