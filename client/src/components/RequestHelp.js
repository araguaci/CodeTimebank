import React, { useContext, useState } from "react";
import alertContext from "../Context/alert/alertContext";
import questionContext from "../Context/question/questionContext";

function RequestHelp() {
  const QuestionContext = useContext(questionContext);
  const { sendQuestion } = QuestionContext;
  const AlertContext = useContext(alertContext);
  const { setAlert } = AlertContext;

  const [questionAsked, setQuestion] = useState({
    question: "",
    language: "",
    comfort: ""
  });

  const { question, language, comfort } = questionAsked;

  const onChange = e =>
    setQuestion({ ...questionAsked, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();

    if (question === "" || language === "" || comfort === "") {
      setAlert("Fill in all fields", "danger");
    } else {
      sendQuestion({ question, language, comfort });
    }
  };

  return (
    <div>
      <h1>What question are you wanting to ask</h1>
      <form onSubmit={submit}>
        Question:{" "}
        <input
          onChange={onChange}
          value={question}
          type='text'
          required
          name='question'
        />
        <br />
        <br />
        Langugage:{" "}
        <input
          onChange={onChange}
          value={language}
          type='text'
          required
          name='language'
        />
        <br />
        <br />
        Comfort:{" "}
        <input
          onChange={onChange}
          value={comfort}
          type='text'
          required
          name='comfort'
        />
        <br />
        <br />
        <input type='submit' />
        <br />
      </form>
    </div>
  );
}

export default RequestHelp;