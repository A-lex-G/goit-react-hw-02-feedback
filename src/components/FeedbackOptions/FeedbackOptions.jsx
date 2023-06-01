import React from "react";
import PropTypes from 'prop-types'



export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            <button type = {options} onClick = {onLeaveFeedback}>Good</button>
            <button type = {options} onClick = {onLeaveFeedback}>Neutral</button>
            <button type = {options} onClick = {onLeaveFeedback}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}