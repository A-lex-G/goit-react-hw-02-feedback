import React from "react";
import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.btnSet}>
            {options.map(option => (<button key={option} className={css.buttonIncr} type = 'button' onClick = {() => onLeaveFeedback(option)}>{option}</button>))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}