import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store'
import setAuthToken from '../utils/setAuthToken'
import { setCurrentUser } from '../actions/authAction'
import jwt_decode from "jwt-decode";
import '../styles/main.css'

if (typeof window !== 'undefined') {
  if (localStorage.jwt) {
    setAuthToken(localStorage.jwt)
    const decoded = jwt_decode(localStorage.jwt)

    store.dispatch(setCurrentUser(decoded))
  }
}

function MyApp({ Component, pageProps }) {
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
