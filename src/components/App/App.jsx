import { useState } from 'react';
import Wrapper from '../Wrapper';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedbackCount = event => {
    const options = event.currentTarget.textContent;
    switch (options) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;    

      default:
        return;
    }
  };
  const stateKeys = Object.keys({good, neutral, bad});
  
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {

    const totalPercenage = (good / total) * 100;
    return Math.round(totalPercenage);
  };
    const positiveFeedback = countPositiveFeedbackPercentage();
    return (
      <Wrapper title="">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={onClickFeedbackCount}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={!positiveFeedback ? 0 : positiveFeedback}
            />
          )}
        </Section>
      </Wrapper>
    );
  
}
 
export default App;

