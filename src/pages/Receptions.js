import React, { useState } from "react";
import receptionsNews from "./receptionsNews.json";
import receptionsSNS from "./receptionsSNS.json";
import receptionTranslatorsNote from "./receptionTranslatorsNote.json";

const Receptions = () => {
  const receptionTypes = [
    ["News", receptionsNews],
    ["SNS", receptionsSNS],
  ];

  const [receptionType, setReceptionType_] = useState(0);
  const [postNumber, setPostNumber] = useState(0);
  const [warnDisplayed, setWarnDisplayed] = useState(false);
  const setReceptionType = (num) => {
    setReceptionType_(num);
    setPostNumber(0);
  };
  const withReception = (type, id, f) => {
    let [original, translation, site, link, author, title] = receptionTypes[type][1][id];
    return f(original, translation, site, link, author, title);
  };

  return (
    <div className="receptionpage">
      <h1 className="title">Public Receptions</h1>
      {warnDisplayed ? (
        <>
          <div className="receptiontabs">
            {receptionTypes.map(([name], id) => (
              <span
                key={name}
                className={"receptiontab" + (id === receptionType ? " current" : "")}
                onClick={() => setReceptionType(id)}
              >
                {name}
              </span>
            ))}
          </div>
          {withReception(
            receptionType,
            postNumber,
            (original, translation, site, link, author, title) => (
              <section className="reception">
                <div
                  className={"receptionbutton" + (postNumber === 0 ? " disabled" : "")}
                  onClick={() => setPostNumber(postNumber - 1)}
                >
                  &lt;
                </div>
                <div className="receptionmain">
                  <p className="receptioninfo">
                    {author === "" ? "Anonymous User" : author} on <a href={link}>{site}</a>:
                  </p>
                  <div className="receptiontext" title={original === "" ? undefined : original}>
                    {title !== "" && <h3 className="subtitle">{title}</h3>}
                    {translation.map((paragraph, id) => (
                      <p key={id} style={{ textAlign: paragraph === "..." ? "center" : "left" }}>
                        {paragraph}
                        <br />
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  className={
                    "receptionbutton" +
                    (postNumber === receptionTypes[receptionType][1].length - 1 ? " disabled" : "")
                  }
                  onClick={() => setPostNumber(postNumber + 1)}
                >
                  &gt;
                </div>
              </section>
            )
          )}
        </>
      ) : (
        <div className="receptionnote">
          <h3 className="subtitle" style={{ textAlign: "center" }}>
            Translator's Note{" "}
            <span className="receptionnotebutton" onClick={() => setWarnDisplayed(true)}>
              [X]
            </span>
          </h3>
          <blockquote>{receptionTranslatorsNote}</blockquote>
        </div>
      )}
    </div>
  );
};

export default Receptions;
