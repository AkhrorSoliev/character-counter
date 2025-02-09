import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stats__container container">
        <div className="stats__item">
          <h2 className="stats__number">278</h2>
          <p className="stats__label">Total Characters</p>
        </div>
        <div className="stats__item">
          <h2 className="stats__number">39</h2>
          <p className="stats__label">Word Count</p>
        </div>
        <div className="stats__item">
          <h2 className="stats__number">04</h2>
          <p className="stats__label">Sentence Count</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
