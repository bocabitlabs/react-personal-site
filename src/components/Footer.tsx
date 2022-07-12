import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="container beautiful-jekyll-footer">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <ul className="list-inline text-center footer-links">
              <li>
                <a href="https://github.com/renefs" title="GitHub">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-github fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/the_rocker" title="Twitter">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/in/rené-fernández-sánchez-73870226"
                  title="LinkedIn"
                >
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">
              René Fernández Sánchez &nbsp;&bull;&nbsp; {getCurrentYear()}{' '}
              &nbsp;&bull;&nbsp;
              <a href="https://renefernandez.com">renefernandez.com</a>
            </p>

            <div className="theme-by text-muted">
              {'Change Language: '}
              {i18n.language === 'es' || i18n.language === 'es-ES' ? (
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => changeLanguage('en')}
                >
                  en
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => changeLanguage('es')}
                >
                  es
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
