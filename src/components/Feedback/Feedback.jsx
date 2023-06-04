import React from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class CreateFeedback extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

    handleSetValue = event => {
        this.setState((prevState) => {
            if (event.target.textContent === "Good") {
                return { good: prevState.good + 1 };
            } else if (event.target.textContent === "Neutral") {
                return { neutral: prevState.neutral + 1 };
            } else {
                return { bad: prevState.bad + 1 }
            }
        })
    }

    countTotalFeedback = ({good,neutral,bad}) => {
        return  good + neutral + bad;
    }

    countPositiveFeedbackPercentage = ({ good }) => {
        return  Math.round((good / this.countTotalFeedback(this.state) * 100));
    }

    render() {
        return (
            <div>
                <FeedbackOptions options={'button'} onLeaveFeedback={this.handleSetValue}/>
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