import React from "react";
import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.btnSet}>
            <button className={css.buttonIncr} type = {options} onClick = {onLeaveFeedback}>Good</button>
            <button className={css.buttonIncr} type = {options} onClick = {onLeaveFeedback}>Neutral</button>
            <button className={css.buttonIncr} type = {options} onClick = {onLeaveFeedback}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}