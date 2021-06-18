import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from 'assets/images/Logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SetLang } from 'redux/store/actions'
import './Navbar.scss'

function Navbar(props) {
  const { t } = useTranslation() // ti18n
  return (
    <>
      {/* ----------- start nav page -----------*/}
      <nav className=" ">
        <div className="container p-2 py-3 btn-hover-behavior">
          <div className="d-flex justify-content-between  align-items-center">
            <Link to="/">
              <img src={Logo} alt="Emirates Auction" className="size-logo" />
            </Link>
            {props.lang === 'ar' ? (
              <button
                type="button"
                onClick={() => props.SetLang('en')}
                className="btn px-3 bgc-primary bgc-primary-hover text-white fz13 m-0">
                {t('English')}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => props.SetLang('ar')}
                className="btn px-3 bgc-primary bgc-primary-hover text-white fz13 m-0">
                {t('العربيه')}
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* ----------- start nav page -----------*/}

      {/* ----------- empty height -----------*/}
      <div className="empty-nav" />
    </>
  )
}
const mapStateToProps = state => {
  return {
    lang: state.Global.lang,
  }
}

const mapDispatchToProps = { SetLang }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
