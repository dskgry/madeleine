/**
 * @author Sven Koelpin
 */
export const RUN_TEST = "RUN_TEST";
export function runTest(code) {
    return {
        type: RUN_TEST,
        code
    };
}

export const CHANGE_EXERCISE = "CHANGE_EXERCISE";
export function changeExercise(value) {
    return {
        type: CHANGE_EXERCISE,
        value
    };

}

export const CHANGE_TEST_RUNNER_STATUS = "CHANGE_TEST_RUNNER_STATUS";
export function changeTestRunnerStatus(status) {
    return {
        type: CHANGE_TEST_RUNNER_STATUS,
        status
    };

}
