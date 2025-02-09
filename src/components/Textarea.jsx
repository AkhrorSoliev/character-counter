import "./Textarea.css";

function Textarea() {
  return (
    <section className=" textarea-wrapper container">
      <textarea className="textarea__container"></textarea>
      <p className="textarea__error">
        <i class="fa-solid fa-circle-info textarea__error__icon"></i>
        <span className="textarea__error__text">
          Limit reached! Your text exceeds 300 characters.
        </span>
      </p>
      <div className="options">
        <label className="options__label">
          <input className="options__input" type="checkbox" />
          <span className="options__text">Exclude Spaces</span>
        </label>
        <label className="options__label">
          <input className="options__input" type="checkbox" />
          <span className="options__text">Set Character Limit</span>
        </label>
        <p className="approx-time">Approx. reading time: 1 minute</p>
      </div>
    </section>
  );
}

export default Textarea;
