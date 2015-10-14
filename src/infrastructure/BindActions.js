/**
 * @author Sven Koelpin
 */
import { bindActionCreators } from "redux";

export default function (...actions) {
    if (actions.length < 1) {
        throw new Error("at least one action needs to be assigned");
    }
    return function (target) {
        target.prototype.getActions = function () {
            if (!this._actions) {
                let merged = Object.assign({}, actions[0]);
                for (let i = 1, length = actions.length; i < length; i++) {
                    merged = Object.assign(merged, actions[i]);
                }
                this._actions = bindActionCreators(merged, this.props.dispatch);
            }
            return this._actions;
        }
    };
};