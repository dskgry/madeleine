/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/MadeleineStore";
import EditorControllerView from "./editor/components/EditorControllerView";
import ExercisesControllerView from "./exercises/components/ExercisesControllerView";

window.document.addEventListener("DOMContentLoaded", ()=> {
    ReactDOM.render(
        <Provider store={Store}>
            <div className="mainContainer">
                <ExercisesControllerView/>
                <EditorControllerView/>
            </div>
        </Provider>,
        window.document.getElementById("app"));
});

