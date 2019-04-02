import React, { Component } from "react";
import { withTranslation } from "react-i18next";

export class Contact extends Component {

  render() {

    const { t } = this.props;

    return <div id="contactme-section">
      <h1 id="contact">{t("contact.title")}</h1>

      <p>{t("contact.text")} <a href='https://twitter.com/the_rocker'>LinkedIn</a> {t("contact.text2")} <a
        href='https://twitter.com/the_rocker'>Twitter</a> {t("contact.text3")}</p>
    </div>;
  }
}

export default withTranslation()(Contact);