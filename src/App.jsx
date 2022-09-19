import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./json/quotes.json";
import color from "./utils/color";
import LikeCount from "./components/LikeCount";

function App() {
  // Se declara likes (contador) con valor por defecto 0 y likeActive (estado) con valor por defecto false
  const [likes, setLikes] = useState(0);
  const [likeActive, setLikeActive] = useState(false);

  const likeF = () => {
    if (likeActive) {
      setLikeActive(false);
      setLikes(likes - 1);
    } else {
      setLikeActive(true);
      setLikes(likes + 1);
    }
  };

  function updateColor() {
    return likes ? { color: "#ff0000" } : { color: "#808080" };
  }

  const heartColor = updateColor().color;

  // Esta funcion calcula un indice random
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);

  // Aqui se extrae un elemento segun el indice random
  const firstQuotes = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];

  const [randomQuote, setRandomQuote] = useState(firstQuotes);
  const [randomColor, setRandomColor] = useState(firstColor);

  const backgroundObject = {
    backgroundColor: randomColor,
  };

  // Esta funcion calcula un quote y un color random
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);
    setLikeActive(false);
  };

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
      <LikeCount
        likes={likes}
        setLikeActive={setLikeActive}
        likeF={likeF}
        heartColor={heartColor}
      />
    </div>
  );
}

export default App;
