import React, { useState } from "react";

import ReactDOM from "react-dom";
const Statistic = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad } = props;
  let all = good + bad + neutral;
  if (all) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <Statistic name='good' value={good} />
          <Statistic name='neutral' value={neutral} />
          <Statistic name='bad' value={bad} />
          <Statistic name='all' value={all} />
          <Statistic
            name='average'
            value={all === 0 ? 0 : (good - bad) / all}
          />
          <Statistic
            name='percentage'
            value={all === 0 ? 0 : (good * 100) / all}
          />
        </table>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [all, setAll] = useState(0);
  // const [average, setAverage] = useState(0);
  // const [positive, setPositive] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}>
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}>
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}>
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
