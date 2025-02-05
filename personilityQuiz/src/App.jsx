import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Question from "./components/Question.jsx";
import Results from "./components/Results.jsx";
import UserForm from "./components/UserForm.jsx";
import { UserProvider } from "./components/UserContext.jsx";

function App() {
  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
  ];

  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
  };

  const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [artwork, setArtwork] = useState(null);

  const handleUserFormSubmit = (userData) => {
    // Handle user form submission
  };

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="App">
      <Header />
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={<UserForm onSubmit={handleUserFormSubmit} />}
          />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
              ) : (
                <Results
                  element={elements[answers[currentQuestionIndex - 1]]}
                  artwork={artwork}
                />
              )
            }
          />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
