import '../styles/globals.scss'
import "../styles/navbar.scss"
import "../styles/Pages/homePg.scss"
import "../styles/Pages/reservations.scss"
import "../styles/Features/ReviewsCarousel.scss"
import "../styles/Buttons/buttonStyles.scss"
import "../styles/globalComps.scss"
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { store } from "../store"
import { Provider } from 'react-redux'
import NavBar from 'layout/navbar/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
