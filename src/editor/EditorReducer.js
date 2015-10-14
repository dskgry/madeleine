/**
 * @author Sven Koelpin
 */
import * as EditorActions from "./EditorActions";
import * as ExerciseActions from "../exercises/ExercisesActions";
import Store from "../store/MadeleineStore";

const initState = {
    code: localStorage.getItem("madelaine_code_0") ? localStorage.getItem("madelaine_code_0") : "console.log('Hello World!');",
    showTranspiledCode: false,
    loading: false,
    executionContext: {
        executing: false,
        fail: false,
        errorMessage: null,
        resultOutput: [],
        transpiledCode: null
    }
};


export default function (state = initState, action = {}) {
    switch (action.type) {
        case EditorActions.RECEIVE_CODE:
            return Object.assign({}, state, {
                code: action.code
            });
        case EditorActions.SHOW_TRANSPILED:
            return Object.assign({}, state, {
                showTranspiledCode: true
            });
        case EditorActions.HIDE_TRANSPILED:
            return Object.assign({}, state, {
                showTranspiledCode: false
            });
        case EditorActions.START_EXECUTION:
            return Object.assign({}, state, {
                loading: true
            });
        case EditorActions.UPDATE_CONSOLE:
            let {executionContext} = state;
            return Object.assign({}, state, {
                executionContext: Object.assign({}, executionContext, {
                    resultOutput: executionContext.resultOutput.concat(action.output)
                })
            });
        case EditorActions.EXECUTE_CODE:
            let context = Object.assign({}, initState.executionContext, {executing: true});
            let isLoading = true;
            try {
                context.transpiledCode = babel.transform(state.code, {stage: 0}).code;
            } catch (e) {
                context.fail = true;
                isLoading = false;
                context.errorMessage = `Invalid ES-2015 code:  ${e}`;
            }

            return Object.assign({}, state, {
                loading: isLoading,
                executionContext: context
            });
        case EditorActions.EXECUTION_FINISHED:
            let currentExercise = Store.getState().ExercisesReducer.currentExercise;
            let suffix = 0;
            if (currentExercise != null) {
                suffix = currentExercise.index;
            }
            if (state.code) {
                localStorage.setItem(`madelaine_code_${suffix}`, state.code);
            }
            return Object.assign({}, state, {
                loading: false,
                executionContext: Object.assign({}, state.executionContext, {
                    executing: false
                })
            });
        case EditorActions.EXECUTION_FAILED:
            return Object.assign({}, state, {
                loading: false,
                executionContext: Object.assign({}, state.executionContext, {
                    resultOutput: [],
                    executing: false,
                    fail: true,
                    errorMessage: `Your code contains errors:  ${action.error}`
                })
            });
        case ExerciseActions.CHANGE_EXERCISE:
            let code = localStorage.getItem(`madelaine_code_${action.value}`);
            let execContext = Object.assign({}, initState.executionContext, {
                transpiledCode: (code) ? babel.transform(code, {stage: 0}).code : null
            });
            return Object.assign({}, state, {
                code,
                executionContext: execContext
            });
        default:
            return state;
    }
}