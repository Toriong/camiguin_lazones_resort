import '../styles/globals.scss'
import "../styles/navbar.scss"
import "../styles/Pages/homePg.scss"
import "../styles/Features/ReviewsCarousel.scss"
import "../styles/Buttons/buttonStyles.scss"
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import NavBar from 'layout/navbar/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
