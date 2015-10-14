/**
 * @author Sven Koelpin
 */
import React, {Component} from "react";

export default class ExerciseSelection extends Component {
    render() {
        let {exercises} = this.props;
        return (
            <div>
                <div>Choose an exercise:</div>
                <select onChange={(event)=>{this.props.onChangeExercise(event.target.value)}}
                        defaultValue={0}
                        className="fullWidth">
                    {exercises.map((elm, index)=> {
                        return (
                            <option key={index} value={elm.index}>{elm.display}</option>
                        );
                    })}
                </select>
            </div>
        );
    }
}