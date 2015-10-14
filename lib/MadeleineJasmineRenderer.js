(function () {
    var done = 0;
    var totalExercises;
    var event = parent.window.document.createEvent("Event");
    event.initEvent("onRunnerMessage", true, true);

    var madeleineJasmineReporter = {
        jasmineStarted: function (suiteInfo) {
            totalExercises = suiteInfo.totalSpecsDefined;
        },

        specDone: function (result) {
            if (result.status === "passed") {
                done++;
            }
            if (done === totalExercises) {
                event.message = "Nice :)! You passed this exercise.";
                event.status = done + " of " + totalExercises + " exercises done.";
                parent.window.document.dispatchEvent(event);
            }
        },

        jasmineDone: function () {
            event.message = document.querySelector(".description a").innerHTML;
            event.status = done + " of " + totalExercises + " exercises done.";
            parent.window.document.dispatchEvent(event);
        }
    };

    jasmine.getEnv().addReporter(madeleineJasmineReporter);
})();