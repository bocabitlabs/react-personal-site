import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contactme-section">
      <h1 id="contact">{t('contact.title')}</h1>

      <p>
        {t('contact.text')}{' '}
        <a href="https://twitter.com/the_rocker">LinkedIn</a>{' '}
        {t('contact.text2')}{' '}
        <a href="https://twitter.com/the_rocker">Twitter</a>{' '}
        {t('contact.text3')}
      </p>
    </div>
  );
}

export default Contact;
