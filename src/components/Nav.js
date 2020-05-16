import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function Nav(props) {
  const { t } = props;

  return (
    <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span className="sr-only">Cambiar Navegación</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="https://renefernandez.com">
            René Fernández Sánchez
          </a>
        </div>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#aboutme">{t('nav.about')}</a>
            </li>
            <li>
              <a href="#contact">{t('nav.contact')}</a>
            </li>
          </ul>
        </div>
        <div className="avatar-container">
          <div className="avatar-img-border">
            <a href="https://renefernandez.com">
              <img
                className="avatar-img"
                src="/img/avatar-icon.png"
                alt="Avatar"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Nav);
