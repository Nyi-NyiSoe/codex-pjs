import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
  ];
  const [index, setIndex] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`,
          padding: "20px",
        }}
      >
        <h1 className="container">Random Quote Generator</h1>
        <p className="container">{quotes[index]}</p>
        <button
          onClick={() => setIndex(Math.floor(Math.random() * quotes.length))}
        >
          <span>Generate Quote</span>
        </button>
      </div>
    </>
  );
}

export default App;
