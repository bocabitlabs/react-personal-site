import React, { Component } from "react";
import Contact from "./Contact";
import { Trans, withTranslation } from "react-i18next";


class MainContent extends Component {
  render() {
    return (
      <div className="container" role="main">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div id="aboutme">

              <div className="about-text">
                <span className="fa fa-briefcase about-icon"/>
                <Trans i18nKey={"previously.text"}/> <a href="https://home.cern"
                                                        title="European Organization for Nuclear Research">CERN</a>
                <Trans i18nKey={"previously.text2"}/>
              </div>

              <p className="about-text">
                <span className="fa fa-graduation-cap about-icon"/>
                <Trans i18nKey={"graduation.text"}/> "<a
                href="https://goo.gl/bcvkrw"
                title="Codesnug: Code storage social tool">Codesnug: Code storage social tool</a>"
                <Trans i18nKey={"graduation.text2"}/>
              </p>

              <div className="about-text">
                <span className="fa fa-code about-icon"/>
                <Trans i18nKey="development"/>
              </div>

              <div className="about-text">
                <span className="fa fa-heart about-icon"/>
                <Trans i18nKey="hobbies"/>
              </div>

              <div className="about-text">
                <span className="fa fa-file-text-o about-icon"/>
                <Trans i18nKey="projects"/>
              </div>

              <div className="about-text">
                <span className="fa fa-globe about-icon"/>
                <Trans i18nKey="about"/>
              </div>

            </div>

            <Contact/>


          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(MainContent);