import React from "react";

import Title from "../../components/title/title.component";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <Title />
      <div className="contact-innerContainer">
        <h1>Contact</h1>
        <div className="contact-content">
          <ul>
            <li>Creator of this web application is Jakov Knežević.</li>
            <li>More:</li>
            <ul>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={"https://github.com/jknezevic1712/"}
                >
                  Github Page
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={
                    "https://www.linkedin.com/in/jakov-kne%C5%BEevi%C4%87-177872223/"
                  }
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={"mailto: knezevic.jakov@gmail.com"}>Send E-mail</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
