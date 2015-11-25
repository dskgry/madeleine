/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";

export default class TestRunner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            htmlTemplate: `<script src="lib/jasmine.js"></script>
                           <script src="lib/jasmine-html.js"></script>
                           <script src="lib/boot.js"></script>
                           <script src="lib/MadeleineJasmineRenderer.js"></script>`
        }
    }

    render() {
        let {currentExercise, srcCodeToTest, message, status} = this.props;
        let exerciseSrc = `static/exercises/${currentExercise.fileName}`;
        let htmlString = `${this.state.htmlTemplate}<script>${srcCodeToTest}</script><script src="${exerciseSrc}"></script>`;
        return (
            <div>
                <iframe id="testRunFrame"
                        srcDoc={htmlString}
                        sandbox="allow-scripts allow-same-origin"
                        className="iFrame"/>
                <div>
                    <h5>{status}</h5>
                    <h4>{message}</h4>
                </div>
            </div>
        );
    }
}
