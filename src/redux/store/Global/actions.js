import { LOADING, LANGUAGE } from '../actionTypes'

export const SetLang = value => {
  return dispatch => {
    dispatch({ type: LANGUAGE, payload: value })
    localStorage.setItem('Lang', value)
  }
}

export const loading = obj => {
  return dispatch => {
    dispatch({ type: LOADING, payload: obj })
  }
}
