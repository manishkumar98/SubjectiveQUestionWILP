import React, { useState } from "react";

const Quiz = () => {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: ""
  });
  const [totalMarks, setTotalMarks] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculate total marks
    const marks = Object.values(answers).reduce(
      (total, answer) => total + parseInt(answer, 10),
      0
    );
    setTotalMarks(marks);
    setPage(page + 1);
  };

  const renderQuestions = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <h3>Write short note on AI.</h3>
            <label htmlFor="answer1">Answer: </label>
            <input
              type="text"
              id="answer1"
              name="answer1"
              value={answers.answer1}
              onChange={handleChange}
            />
            <button onClick={handleNextPage}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Write short note on ML.</h3>
            <label htmlFor="answer2">Answer: </label>
            <input
              type="text"
              id="answer2"
              name="answer2"
              value={answers.answer2}
              onChange={handleChange}
            />
            <button onClick={handleNextPage}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Write short note on Data Science.</h3>
            <label htmlFor="answer3">Answer: </label>
            <input
              type="text"
              id="answer3"
              name="answer3"
              value={answers.answer3}
              onChange={handleChange}
            />
            <button onClick={handleNextPage}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Write short note on NLP.</h3>
            <label htmlFor="answer4">Answer: </label>
            <input
              type="text"
              id="answer4"
              name="answer4"
              value={answers.answer4}
              onChange={handleChange}
            />
            <button onClick={handleNextPage}>Next</button>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>Write short note on Data Mining.</h3>
            <label htmlFor="answer5">Answer: </label>
            <input
              type="text"
              id="answer5"
              name="answer5"
              value={answers.answer5}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      case 6:
        return (
          <div>
            <h3>Total Marks: {totalMarks}</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderQuestions()}</div>;
};

export default Quiz;
