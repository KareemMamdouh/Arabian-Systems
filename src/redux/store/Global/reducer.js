import { LOADING, LANGUAGE } from 'redux/store/actionTypes'

export const initialState = {
  loading: false,
  lang: localStorage.getItem('Lang') ? localStorage.getItem('Lang') : 'en',
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: { ...state.loading, ...action.payload },
      }
    case LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      }
    default:
      return { ...state }
  }
}

export default account
