import React from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class CreateFeedback extends React.Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0
}

    handleSetValue = type => {
        this.setState((prevState) => {
            return {[type]: prevState[type] + 1}
        })
    }

    countTotalFeedback = ({ good, neutral, bad }) => {
        return  good + neutral + bad;
    }

    countPositiveFeedbackPercentage = ({ good }) => {
        return  Math.round((good / this.countTotalFeedback(this.state) * 100));
    }

    render() {
        return (
            <div>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={this.handleSetValue}/>
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback(this.state)}
                    positivePercentage={this.countPositiveFeedbackPercentage(this.state, this.total)} />
            </div>
        )
    }
}