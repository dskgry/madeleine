/**
 * @author Sven Koelpin
 */
export const RECEIVE_CODE = "RECEIVE_CODE";
export function receiveCode(code) {
    return {
        type: RECEIVE_CODE,
        code
    };
}

export const EXECUTE_CODE = "EXECUTE_CODE";
export const START_EXECUTION = "START_EXECUTION";
export function executeCode() {
    return function (dispatch) {
        dispatch({
            type: START_EXECUTION
        });
        //return deferred promise to enable loading-screen
        return new Promise((success)=> {
            window.setTimeout(()=> {
                success();
            }, 10)
        }).then(()=> {
                dispatch({
                    type: EXECUTE_CODE
                });
            })
    };
}

export const SHOW_TRANSPILED = "SHOW_TRANSPILED";
export function showTranspiledCode() {
    return function (dispatch) {
        dispatch({
            type: SHOW_TRANSPILED
        });
    };
}

export const HIDE_TRANSPILED = "HIDE_TRANSPILED";
export function hideTranspiledCode() {
    return {
        type: HIDE_TRANSPILED
    };
}

export const UPDATE_CONSOLE = "UPDATE_CONSOLE";
export function updateConsole(output) {
    return {
        type: UPDATE_CONSOLE,
        output
    };
}

export const EXECUTION_FINISHED = "EXECUTION_FINISHED";
export function executionFinished() {
    return {
        type: EXECUTION_FINISHED
    };
}

export const EXECUTION_FAILED = "EXECUTION_FAILED";
export function executionFailed(error) {
    return {
        type: EXECUTION_FAILED,
        error
    };
}