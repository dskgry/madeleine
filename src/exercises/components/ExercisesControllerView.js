/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ExercisesActions from "./../ExercisesActions";
import BindActions from "../../infrastructure/BindActions";
import TestRunner from "./TestRunner";
import ExerciseSelection from "./ExerciseSelection";

@BindActions(ExercisesActions)
class ExercisesControllerView extends Component {

    componentDidMount() {
        //listen to events from testrunner
        window.document.addEventListener("onRunnerMessage", (status)=> {
            this.getActions().changeTestRunnerStatus(status);
        }, false);
    }

    render() {
        let {exercises,currentExercise,codeToTest, testRunnerStatus} = this.props;
        let testRunner = currentExercise != null ?
            <TestRunner
                message={testRunnerStatus.message}
                status={testRunnerStatus.status}
                srcCodeToTest={codeToTest}
                currentExercise={currentExercise}/> : null;
        return (
            <div className="exercises">
                <ExerciseSelection onChangeExercise={this.getActions().changeExercise} exercises={exercises}/>
                {testRunner}
            </div>
        );
    }
}

export default connect((state)=> {
    return Object.assign({}, state.ExercisesReducer, {
        codeToTest: state.EditorReducer.executionContext.transpiledCode
    });
})(ExercisesControllerView);

