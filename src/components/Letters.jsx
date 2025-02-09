import { useEffect, useState } from "react";
import "./Letters.css";

function Letters({ text, excludeSpaces }) {
  const [lettersAmount, setLettersAmount] = useState([]);
  const [lettersLength, setLettersLength] = useState(0);

  useEffect(() => {
    let letters = text
      .toLowerCase()
      .split("")
      .filter((letter) => {
        let l = letter.charCodeAt();
        return (
          (l >= 97 && l <= 122) ||
          (l >= 48 && l <= 57) ||
          (l == 32 && excludeSpaces)
        );
      });
    setLettersLength(letters.length);

    let countMap = {};

    letters.forEach((char) => {
      if (char == " ") {
        countMap["space"] = (countMap["space"] || 0) + 1;
      } else {
        countMap[char] = (countMap[char] || 0) + 1;
      }
    });

    const lettersAmount = Object.keys(countMap)
      .map((char) => {
        return {
          [char]: countMap[char],
        };
      })
      .sort((a, b) => {
        return Object.values(b)[0] - Object.values(a)[0];
      });

    setLettersAmount(lettersAmount);
  }, [text, excludeSpaces]);
  return (
    <section className="letters">
      <div className="letters__container container">
        <h3 className="letters__title">Letter Density</h3>
        <ul className="letters__list">
          {lettersAmount.map((letter) => {
            let key = Object.keys(letter)[0];
            let value = Object.values(letter)[0];
            return (
              <li className="letters__list__item" key={key}>
                <p className="letters__list__letter">{key}</p>
                <div className="letters__list__percentage">
                  <div className="letters__list__percentage__proccess"></div>
                </div>
                <p className="letters__list__stat">
                  {value} {((value / lettersLength) * 100).toFixed(2)}%
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Letters;
