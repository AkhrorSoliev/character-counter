import { useEffect, useState } from "react";
import "./Stats.css";

function Stats({ text }) {
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [characters, setCharacters] = useState(0);

  useEffect(() => {
    if (text.length === 0) {
      setWords(0);
      setSentences(0);
      setCharacters(0);
      return;
    }
    const words = text.trim().split(/\s+/);
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const characters = text.replace(/\s/g, "");
    setWords(words.length);
    setSentences(sentences.length);
    setCharacters(characters.length);
  }, [text]);

  return (
    <section className="stats">
      <div className="stats__container container">
        <div className="stats__item">
          <h2 className="stats__number">{characters}</h2>
          <p className="stats__label">Total Characters</p>
        </div>
        <div className="stats__item">
          <h2 className="stats__number">{words}</h2>
          <p className="stats__label">Word Count</p>
        </div>
        <div className="stats__item">
          <h2 className="stats__number">{sentences}</h2>
          <p className="stats__label">Sentence Count</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
