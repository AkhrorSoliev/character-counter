import { useEffect, useState } from "react";
import "./Textarea.css";

function Textarea({ setText, setExcludeSpaces, excludeSpaces, text }) {
  const [limitCharacter, setLimitCharacter] = useState(false);
  const [error, setError] = useState(false);
  const [readingTime, setReadingTime] = useState(0);
  const [limitWords, setLimitWords] = useState(300);

  useEffect(() => {
    const words = text.trim().split(/\s+/).length;
    const averageWPM = 200;
    const estimatedTime = words / averageWPM;
    setReadingTime(Math.round(estimatedTime));
  }, [text]);

  useEffect(() => {
    if (!limitCharacter) {
      setError(false);
    }
  }, [limitCharacter]);

  return (
    <section className="textarea-wrapper container">
      <textarea
        onChange={(e) => {
          if (limitCharacter && e.target.value.length >= limitWords) {
            setError(true);
          } else {
            setError(false);
            setText(e.target.value);
          }
        }}
        className={`textarea__container ${error ? "error-textarea" : ""}`}
        maxLength={limitCharacter ? limitWords : undefined}
      ></textarea>
      {error && limitCharacter && (
        <p className="textarea__error">
          <i className="fa-solid fa-circle-info textarea__error__icon"></i>
          <span className="textarea__error__text">
            Limit reached! Your text exceeds {limitWords} characters.
          </span>
        </p>
      )}
      <div className="options">
        <label className="options__label">
          <input
            className="options__input"
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
          />
          <span className="options__text">Exclude Spaces</span>
        </label>
        <label className="options__label">
          <input
            onClick={() => setLimitCharacter(!limitCharacter)}
            className="options__input"
            type="checkbox"
          />
          <span className="options__text">Set Character Limit</span>
          {limitCharacter && (
            <input
              className="options__input"
              type="number"
              value={limitWords}
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value === "" ||
                  (Number(value) > 0 && Number.isInteger(Number(value)))
                ) {
                  setLimitWords(value === "" ? "" : Number(value));
                }
              }}
            />
          )}
        </label>
        <p className="approx-time">
          Approx. reading time: {readingTime} minute
        </p>
      </div>
    </section>
  );
}

export default Textarea;
