import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    i18n: PropTypes.shape({
      changeLanguage: PropTypes.func.isRequired,
      language: PropTypes.string.isRequired
    }).isRequired,
    t: PropTypes.func.isRequired
  };

  changeLanguage = lang => {
    const { i18n } = this.props;

    i18n.changeLanguage(lang);
  };

  getLanguage = () => {
    const { i18n } = this.props;

    return i18n.language;
  };

  getCurrentYear = () => {
    return new Date().getFullYear();
  };

  render() {
    const { t } = this.props;

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
                    href="&#x6d;&#x61;&#105;&#x6c;&#116;&#111;&#58;&#x72;&#101;&#x6e;&#101;&#x40;&#x62;&#x6f;&#x63;&#x61;&#98;&#105;&#x74;&#x2e;&#99;&#x6f;&#109;"
                    title="Email me"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-envelope fa-stack-1x fa-inverse" />
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
                René Fernández Sánchez &nbsp;&bull;&nbsp;{' '}
                {this.getCurrentYear()} &nbsp;&bull;&nbsp;
                <a href="https://renefernandez.com">renefernandez.com</a>
              </p>

              <p className="theme-by text-muted">
                {t('footer.template_by')}
                <a href="http://deanattali.com/beautiful-jekyll/">
                  beautiful-jekyll
                </a>
              </p>
              <div className="theme-by text-muted">
                {'Change Language: '}
                {this.getLanguage() === 'es' ||
                this.getLanguage() === 'es-ES' ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.changeLanguage('en')}
                  >
                    en
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.changeLanguage('es')}
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
}

export default withTranslation()(Footer);
