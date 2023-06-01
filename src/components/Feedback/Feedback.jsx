import React from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Statistics/Notification";
import { ReactPropTypes } from "react";
import css from './Feedback.module.css';

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
        let total = 0;
        return total = good + neutral + bad;
    }

    countPositiveFeedbackPercentage = ({ good }, total) => {
        let positiveFeedbackPart = 0;
        return positiveFeedbackPart = Math.round((good / this.countTotalFeedback(this.state) * 100));
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


// Using Switch>======================================
// switch (button) {
//     case 'good':
//         return { good: prevState.good +1 };
//     case 'neutral':
//         return { neutral: prevState.neutral + 1 };
//     case 'bad':
//         return { bad: prevState.bad +1 }
//     default:
//         break;
// }==================================================
//                     {// Using Switch======================================================================
//                     /* <button type= 'button' onClick={() => this.handleSetValue('good')}>Good</button>
//                     <button type= 'button' onClick={() => this.handleSetValue('neutral')}>Neutral</button>
//                     <button type= 'button' onClick={() => this.handleSetValue('bad')}>Bad</button> */
//                     // ===================================================================================
//                     }
//                 {/* <div>
//                     <p>Good:{this.state.good}</p>
//                     <p>Neutral:{this.state.neutral}</p>
//                     <p>Bad:{this.state.bad}</p>
//                     <p>Total:{this.countTotalFeedback(this.state)}</p>
//                     <p>Positive feedback: {this.countPositiveFeedbackPercentage(this.state, this.total)}%</p>
//                 </div> */}