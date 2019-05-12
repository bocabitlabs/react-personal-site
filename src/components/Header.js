import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function Header(props) {
  const { t } = props;

  return (
    <header className="header-section has-img">
      <div className="big-img intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="page-heading">
                <h1>{t('title')}</h1>
                <hr className="small" />
                <span className="page-subheading">{t('subtitle')}</span>
              </div>
            </div>
          </div>
        </div>
        <span className="img-desc" />
      </div>
    </header>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Header);
