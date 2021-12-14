import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the animal which barks?",
      answers: [
        {
          text: "Cat",
          correct: false,
        },
        {
          text: "Tiger",
          correct: false,
        },
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Dog",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
      answers: [
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1913",
          correct: false,
        },
        {
          text: "1911",
          correct: false,
        },
        {
          text: "1915",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "What is the name of the biggest technology company in South Korea?",
      answers: [
        {
          text: "Mazda",
          correct: false,
        },
        {
          text: "Samsung",
          correct: true,
        },
        {
          text: "Toyota",
          correct: false,
        },
        {
          text: "Lenovo",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which metal was discovered by Hans Christian Oersted in 1825?",
      answers: [
        {
          text: "Iron",
          correct: false,
        },
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Aluminium",
          correct: true,
        },
        {
          text: "Silver",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the capital of Portugal?",
      answers: [
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Sofia",
          correct: false,
        },
        {
          text: "Brussels",
          correct: false,
        },
        {
          text: "Lisbon",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "How many breaths does the human body take daily?",
      answers: [
        {
          text: "20,000",
          correct: true,
        },
        {
          text: "10.000",
          correct: false,
        },
        {
          text: "22.000",
          correct: false,
        },
        {
          text: "19.000",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the doll, Barbie’s, full name?",
      answers: [
        {
          text: "Barbara Millicent Roberts",
          correct: true,
        },
        {
          text: "Barbi Millicent Robertson",
          correct: false,
        },
        {
          text: "Barbara Millicent Robert",
          correct: false,
        },
        {
          text: "Barbara Milli Robertson",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What did Al Capone’s business card state his occupation was?",
      answers: [
        {
          text: "A dishwasher",
          correct: false,
        },
        {
          text: "A used furniture salesman",
          correct: true,
        },
        {
          text: "A ironing man",
          correct: false,
        },
        {
          text: "A Sales man",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the lifespan of a dragonfly?",
      answers: [
        {
          text: "23",
          correct: false,
        },
        {
          text: "26",
          correct: false,
        },
        {
          text: "20",
          correct: false,
        },
        {
          text: "24",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Who invented the tin can for preserving food in 1810?",
      answers: [
        {
          text: "Peter Durand",
          correct: true,
        },
        {
          text: "Peter Hamilton",
          correct: false,
        },
        {
          text: "Peter Johnson",
          correct: false,
        },
        {
          text: "Peter Robertson",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What year was the very first model of the iPhone released?",
      answers: [
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: true,
        },
        {
          text: "2008",
          correct: false,
        },
        {
          text: "2009",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "What’s the shortcut for the “copy” function on most computers?",
      answers: [
        {
          text: "Ctrl C",
          correct: true,
        },
        {
          text: "Ctrl D",
          correct: false,
        },
        {
          text: "Ctrl B",
          correct: false,
        },
        {
          text: "Ctrl E",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
