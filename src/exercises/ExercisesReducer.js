/**
 * @author Sven Koelpin
 */
import * as ExerciseActions from "./ExercisesActions";
import * as EditorActions from "../editor/EditorActions";
import Store from "../store/MadeleineStore";
import exercisesDefinition from "../../static/exercises/exercisesDefinition";

const initState = {
    exercises: exercisesDefinition,
    currentExercise: null,
    testRunnerStatus: {}
};


export default function (state = initState, action = {}) {
    switch (action.type) {
        case ExerciseActions.CHANGE_EXERCISE:
            let currentExercise = null;
            if (action.value !== "0") {
                currentExercise = state.exercises[action.value];
            }
            return Object.assign({}, state, {
                currentExercise,
                testRunnerStatus: {}
            });
        case ExerciseActions.CHANGE_TEST_RUNNER_STATUS:
            return Object.assign({}, state, {
                testRunnerStatus: action.status
            });
        default:
            return state;
    }
}