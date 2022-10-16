import { useState } from 'react';
// import { Component } from 'react';
import { Chapter } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Box } from './Box';
import { Container, Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = e => {
    const option = e.target.name;
    console.log(option);
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        console.log('Error e.target.name = ', e.target.name);
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.trunc((good / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  return (
    <Box m="0, auto" p="20px" as="main">
      <Container>
        <Wrapper>
          <Chapter title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={handleClickButton}
            />
          </Chapter>

          <Chapter title="Statistics">
            {countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedback()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Chapter>
        </Wrapper>
      </Container>
    </Box>
  );
};
