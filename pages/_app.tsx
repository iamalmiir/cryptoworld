import '../styles/globals.scss'
import type { AppProps } from 'next/app'
// import { AuthProvider } from '@lib/AuthContext'
import { Fragment } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
