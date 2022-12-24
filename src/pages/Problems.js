import React from "react";
import problems from "./problems.json";

const Problems = () => (
  <>
    <h1 className="title">Problems</h1>
    <section className="textsection">
      <h3 className="subtitle" style={{ textAlign: "center" }}>
        The Lack of Ethics in AI
      </h3>
      <p>
        <figure className="inlinefigure" style={{ width: "30%", display: "float", float: "left" }}>
          <img
            src={process.env.PUBLIC_URL + "/problems/01.png"}
            style={{ width: "100%" }}
            alt="AI-generated painting"
          />
          <figcaption>AI-generated painting</figcaption>
        </figure>

        {problems[0]}
      </p>
      <p>{problems[1]}</p>
      <p>{problems[2]}</p>
      <p>
        <figure className="inlinefigure" style={{ width: "30%", display: "float", float: "right" }}>
          <img
            src={process.env.PUBLIC_URL + "/problems/02.png"}
            style={{ width: "50%" }}
            alt="Original"
          />
          <img
            src={process.env.PUBLIC_URL + "/problems/03.png"}
            style={{ width: "50%" }}
            alt="With AI-Filter"
          />
          <figcaption>Comparison</figcaption>
        </figure>
        {problems[3]}
      </p>
      <p>{problems[4]}</p>
    </section>
    <section className="textsection">
      <h3 className="subtitle" style={{ textAlign: "center" }}>
        Techno-Solutionism: “the view that AI can be seen as a panacea when it is merely a tool” (AI
        100)
      </h3>
      <p>{problems[5]}</p>
      <p>{problems[6]}</p>
      <p>{problems[7]}</p>
    </section>
    <section className="textsection">
      <h3 className="subtitle" style={{ textAlign: "center" }}>
        Bibliography
      </h3>
      <p>
        “SQ10. What Are the Most Pressing Dangers of Ai?” One Hundred Year Study on Artificial
        Intelligence (AI100),
        https://ai100.stanford.edu/2021-report/standing-questions-and-responses/sq10-what-are-most-pressing-dangers-ai#determinism.
      </p>
      <p>
        Ruha Benjamin, Race After Technology: Abolitionist Tools for the New Jim Code, Polity, 2019
      </p>
      Plunkett, Luke. “AI Creating 'Art' Is an Ethical and Copyright Nightmare.” Kotaku, 25 Aug.
      2022, https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-copyright-1849388060.
      <p>
        Das, Anaishsa. “AI-Generated Art Raises Ethical Concerns.” The Wildcat Tribune,
        https://thewildcattribune.com/15530/ae/ai-generated-art-raises-ethical-concerns/.
      </p>
    </section>
  </>
);

export default Problems;
