import React from 'react'

import Home from 'pages/Home/Home'
import './App.scss'
import './i18n'
import { Router, Route } from 'react-router-dom'
import history from 'redux/_helpers/history'
import { connect } from 'react-redux'

require('dotenv').config()

function App(props) {
  return (
    <div className="">
      <div
        className={`App ${props.lang === 'ar' ? 'AppRTL' : 'AppLTR'}`}
        dir={props.lang === 'ar' ? 'rtl' : 'ltr'}>
        <Router history={history}>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    lang: state.Global.lang,
  }
}

export default connect(mapStateToProps, null)(App)
