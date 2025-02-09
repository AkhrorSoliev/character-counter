import { useState } from "react";
import "./Textarea.css";

function Textarea({ setText, setExcludeSpaces, excludeSpaces }) {
  const [limitCharacter, setLimitCharacter] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className=" textarea-wrapper container">
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="textarea__container"
      ></textarea>
      {error && (
        <p className="textarea__error">
          <i className="fa-solid fa-circle-info textarea__error__icon"></i>
          <span className="textarea__error__text">
            Limit reached! Your text exceeds 300 characters.
          </span>
        </p>
      )}
      <div className="options">
        <label className="options__label">
          <input
            className="options__input"
            type="checkbox"
            defaultChecked={excludeSpaces}
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
          <input
            className={`options__input ${limitCharacter ? "" : "hidden"}`}
            type="number"
          />
        </label>

        <p className="approx-time">Approx. reading time: 1 minute</p>
      </div>
    </section>
  );
}

export default Textarea;
