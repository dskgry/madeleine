/**
 * @author Sven Koelpin
 */
import Store from "../store/MadeleineStore";

let consoleLog = console.log;
export default function overrideConsole(action) {
    console.log = function () {
        let output = [];
        for (let i = 0, len = arguments.length; i < len; i++) {
            let arg = arguments[i];
            if (typeof arg === "undefined") {
                arg = "undefined";
            } else if (arg === null) {
                arg = "null";
            }
            output.push(arg.toString());
        }
        consoleLog.apply(console, arguments);
        action(output);
    };
};