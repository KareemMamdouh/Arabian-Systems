import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from 'assets/images/Logo.png'
import YoutubeLight from 'assets/images/Youtube_light.svg'
import Twitter from 'assets/images/Twitter.svg'
import Google from 'assets/images/Google.svg'
import Facebook from 'assets/images/Facebook.svg'
import Instagram from 'assets/images/Instagram.svg'
import { Link } from 'react-router-dom'

function Footer(props) {
  const { t } = useTranslation() // ti18n
  return (
    <footer>
      <div className="container py-3">
        <div className="row m-0 py-5  align-items-end text-md-start text-center">
          <div className="col-md-6">
            <Link to="/">
              <img src={Logo} alt="Emirates Auction sold" className="size-logo mb-3 px-0" />
            </Link>

            <p className="fz12 text-muted">
              {t(
                'Buy new and used cars in UAE, shipping and delivery service are available, Sell your car at  the highest price online with no worries visiting cars show rooms.',
              )}
            </p>
          </div>
          <div className="col-md-6 ">
            <p className="fz15 col-lg-8 col-md-10 px-1 mb-2 py-md-0 py-3">
              {t('Follow the first and the largest online auction in UAE and Middle East')}
            </p>
            <div className="d-flex justify-content-md-start justify-content-center btn-hover-behavior ">
              <a
                href="/"
                target="_blank"
                className="bgc-primary bgc-primary-hover m-1 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                <img src={Facebook} alt="Emirates Auction sold" className="img20  m-3" />
              </a>
              <a
                href="/"
                target="_blank"
                className="bgc-primary bgc-primary-hover m-1 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                <img src={Twitter} alt="Emirates Auction sold" className="img20  m-3" />
              </a>
              <a
                href="/"
                target="_blank"
                className="bgc-primary bgc-primary-hover m-1 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                <img src={YoutubeLight} alt="Emirates Auction sold" className="img20  m-3" />
              </a>

              <a
                href="/"
                target="_blank"
                className="bgc-primary bgc-primary-hover m-1 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                <img src={Instagram} alt="Emirates Auction sold" className="img20  m-3" />
              </a>

              <a
                href="/"
                target="_blank"
                className="bgc-primary bgc-primary-hover m-1 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                <img src={Google} alt="Emirates Auction sold" className="img20  m-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
