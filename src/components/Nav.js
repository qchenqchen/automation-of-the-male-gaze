import { Link } from "@curi/react-dom";
import React from "react";

const Nav = ({ current }) => (
  <nav>
    <h1 className="navtitle">Automation of The Male Gaze</h1>
    <h3 className="navsubtitle">StableDiffusion &amp; Its Consequences</h3>
    {[
      "Home",
      "Playground",
      "StableDiffusion",
      "Public Receptions",
      "Problems",
      "Potentials",
      "Furthermore",
      "About",
    ].map((name) => (
      <Link key={name} name={name} className={"navlink" + (current === name ? " current" : "")}>
        {name}
      </Link>
    ))}
    <a href="https://github.com/qchenqchen/qchenqchen.github.io" className="navlink">
      GitHub
    </a>
  </nav>
);

export default Nav;
