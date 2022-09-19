import React from "react";
import color from "../utils/color";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {
  const colorObj = {
    color: randomColor,
  };

  const backgroundObj = {
    backgroundColor: randomColor,
  };

  return (
    <article style={colorObj} className="card">
      
      <p className="card__quote"><FontAwesomeIcon className="icon__quote" icon={faQuoteLeft} /> {randomQuote.quote}</p>
      <h1 className="card__author">{randomQuote.author}</h1>
      <button
        className="card__btn"
        style={backgroundObj}
        onClick={getRandomAll}
      >
        &#62;
      </button>
    </article>
  );
};

export default QuoteBox;
