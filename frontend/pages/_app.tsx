import '../styles/globals.css'
import "../styles/navbar.css"
import "../styles/Pages/homePg.css"
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
