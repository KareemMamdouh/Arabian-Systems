import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SetLang } from 'redux/store/actions'
import { useTranslation } from 'react-i18next'
import whiteArrowDown from 'assets/images/whiteArrowDown.svg'
import sold from 'assets/images/sold.svg'
import documents from 'assets/images/documents.svg'
import star from 'assets/images/star.svg'
import time from 'assets/images/time.svg'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import SellingForm from './components/SellingForm/SellingForm'
import './Home.scss'

function Home(props) {
  useEffect(() => {}, [])
  const { t } = useTranslation() // ti18n

  return (
    <main className="Home">
      <Navbar />
      {/* ----------- start header page -----------*/}
      <header>
        <div className="container d-flex align-items-end col-12 h-100">
          <div className="mx-auto text-center text-white header-text  text-uppercase p-3 pb-5">
            <h1 className="h4 fw-bold ">{t('Selling Your Car Now')}</h1>
            <h1 className="h5 fw-bold" id="how-it-works">
              {t('Is Easier than ever.')}
            </h1>
          </div>
        </div>
        <div className="btn-hover-behavior start-btn">
          <a href="/#how-it-works" className="btn bgc-primary bgc-primary-hover fz12 text-white ">
            {t('Start Today')}
            <img src={whiteArrowDown} alt="Emirates Auction Start Today" className="img12 mx-1" />
          </a>
        </div>
      </header>
      {/* ----------- end header page -----------*/}

      {/* start how-it-works section page */}
      <section className="how-it-works">
        <div className="">
          <div className="row m-0">
            <div className="col-md-6  d-flex justify-content-end steps text-white py-5">
              <div className="">
                <h1 className="h3 fw-bold">{t('How it works?')}</h1>
                <p className="fz13 mb-4 ">{t('Sell Your Car in Three Simple Steps')}</p>
                <div className="col-12 d-flex align-items-center py-3 ">
                  <div className="bgc-primary h5 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                    1
                  </div>
                  <div className="px-2 col">
                    <p className="fz12 fw-bold mb-1">{t('Submit Your Car')}</p>
                    <p className="fz11 m-0">
                      {t('Enter your car details for inspection on Emirates Auction.')}
                    </p>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center py-3">
                  <div className="bgc-primary h5 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                    2
                  </div>
                  <div className="px-2 col">
                    <p className="fz12 fw-bold mb-1">{t('Receive Valuation and Offer')}</p>
                    <p className="fz11 m-0">
                      {t('We will check your car and provide you with approved purchase price.')}
                    </p>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center py-3">
                  <div className="bgc-primary h5 rounded-circle d-flex align-items-center justify-content-center img40 m-0">
                    3
                  </div>
                  <div className="px-2 col">
                    <p className="fz12 fw-bold mb-1">{t('Get Your Payment')}</p>
                    <p className="fz11 m-0">
                      {t(' After a price is agreed for your car,')}
                      <br />
                      {t(' we will exchange cash on a day that suits you.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  steps-result  d-flex justify-content-center align-items-center ">
              <div className="text-white text-center">
                <img src={sold} alt="Emirates Auction sold" className="img40    m-3" />
                <h2 className="h4 text-uppercase fw-bold">{t('Your car will be sold by bidding')}</h2>
                <p className="fz15">
                  {t('You set the starting price it will be sold for the highest bidder')}{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- end how-it-works section page ----------- */}

      {/* -----------  selling form ----------- */}
      <SellingForm />
      {/* ----------- end selling form ----------- */}

      {/* ----------- start why-use-our-service section page ----------- */}
      <section className="why-use-our-service py-md-5 py-3">
        <div className="container py-5 my-3">
          <h1 className="h3 text-dark fw-bold text-center mb-3">{t('Why use our services?')}</h1>
          <p className="fz14 text-muted col-lg-5 col-md-6 mx-auto text-center mb-4">
            {t(
              'We operates 24 hour/7 day-a-week telephone, email & remote support services that is staffed to handle any issue or question',
            )}
          </p>
          <div className="  row m-0">
            <div className="col-lg-4 col-md-6  p-2 align-items-stretch">
              <div className="row m-0 align-items-center h-100 border rounded bg-white p-2 py-4" width="30%">
                <div className="col-md-3 text-center">
                  <img src={documents} alt="Emirates Auction sold" className="img40  m-3" />
                </div>
                <div className="col-md-9 my-3 text-md-start text-center">
                  <p className="fz14 fw-bold text-muted mb-2">{t('Easy Process')}</p>
                  <p className="fz13  text-muted m-0 col-md-9">
                    {t(
                      ' We help you save time and effort. We master how to sell a car privately and have simplified the process of selling a vehicle to make it hassle-free.',
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  p-2 align-items-stretch">
              <div className="row m-0 align-items-center h-100 border rounded bg-white p-2 py-4" width="30%">
                <div className="col-md-3 text-center">
                  <img src={star} alt="Emirates Auction sold" className="img40  m-3" />
                </div>
                <div className="col-md-9 my-3 text-md-start text-center">
                  <p className="fz14 fw-bold text-muted mb-2">{t('Get The Best Return')}</p>
                  <p className="fz13  text-muted m-0 col-md-9">
                    {t(
                      'Get the most money for your car. Reach serious buyers. Avoid lowball offers. Use our  valuation tools for a better price when selling your car.',
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12  p-2 align-items-stretch ">
              <div className="row m-0 align-items-center h-100 border rounded bg-white p-2 py-4" width="30%">
                <div className="col-md-3 text-center">
                  <img src={time} alt="Emirates Auction sold" className="img40  m-3" />
                </div>
                <div className="col-md-9 my-3 text-md-start text-center">
                  <p className="fz14 fw-bold text-muted mb-2">{t('Dedicated Team')}</p>
                  <p className="fz13  text-muted m-0 col-md-9">
                    {t(
                      'Our seller experts are here to help you at every step of the way via email, phone, or  chat all the week days! They help you find real buyers for your car and finalize your deal fast.',
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- end end-use-our-service section page -----------*/}
      {/* ----------- start Get prepared before our call section page -----------*/}
      <section className="Get-prepared  py-md-5 py-3">
        <div className="container  py-5  my-3">
          <h1 className="h3 text-dark fw-bold text-center mb-3">{t('Get prepared before our call')}</h1>
          <p className="fz14 text-muted col-lg-5 col-md-6 mx-auto text-center mb-4">
            {t('Required Documents & Procedures')}
          </p>
          <div className="col-lg-9  col-10 mx-auto row m-0">
            <div className="col-md-6">
              <ul>
                <li className="fz14 text-muted py-2">
                  {t('The car must be brought in good working condition')}
                </li>

                <li className="fz14 text-muted py-2">
                  {t("In case the chassis is not OK, we'll do a registration test (AED 170 is the cost).")}
                </li>
                <li className="fz14 text-muted py-2">
                  {t(
                    'The commission is 5% for GCC cars and 7% for imported cars (minimum commission 1000 AED).',
                  )}
                </li>
                <li className="fz14 text-muted py-2">
                  {t(
                    'If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion',
                  )}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li className="fz14 text-muted py-2">
                  {t('The car must be brought in good working condition')}
                </li>

                <li className="fz14 text-muted py-2">
                  {t("In case the chassis is not OK, we'll do a registration test (AED 170 is the cost).")}
                </li>
                <li className="fz14 text-muted py-2">
                  {t(
                    'The commission is 5% for GCC cars and 7% for imported cars (minimum commission 1000 AED).',
                  )}
                </li>
                <li className="fz14 text-muted py-2">
                  {t(
                    'If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion',
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- end Get prepared before section page -----------*/}

      {/* ----------- start required-documentation section page -----------*/}
      <section className="required-documentation py-5 ">
        <div className="container   text-center py-3 px-md-2 px-0">
          <h1 className="h3 text-dark fw-bold  mb-3">{t('Required Documentation')}</h1>
          <div className="  row m-0">
            <div className="col  p-2 ">
              <h5 className="fz18 fw-bold text-muted">{t('Emirates ID')}</h5>
            </div>
            <div className="col-5  p-2 ">
              <h5 className="fz18 fw-bold m-0 text-muted">{t('Possession certificate')}</h5>
              <p className="fz12 text-muted">{t('(Dubai certificate or transfer to Dubai)')}</p>
            </div>
            <div className="col  p-2 ">
              <h5 className="fz18 fw-bold text-muted">{t('Bank account details')}</h5>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- end end-use-our-service section page -----------*/}
      <Footer />
    </main>
  )
}
const mapStateToProps = state => {
  return {
    lang: state.Global.lang,
  }
}

const mapDispatchToProps = { SetLang }
export default connect(mapStateToProps, mapDispatchToProps)(Home)
