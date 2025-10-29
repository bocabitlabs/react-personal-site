import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function Contact(props) {
  const { t } = props;

  return (
    <div id="contactme-section">
      <h1 id="contact">{t('contact.title')}</h1>

      <p>
        {t('contact.text')}{' '}
        <a href="https://www.linkedin.com/in/rene-fernandez/" title="Rene Fernandez in LinkedIn">LinkedIn</a>{' '}
        {t('contact.text2')}{' '}
        <a href="https://x.com/the_rocker" title="Rene Fernandez in X">X</a>{' '}
        {t('contact.text3')}
      </p>
    </div>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Contact);
