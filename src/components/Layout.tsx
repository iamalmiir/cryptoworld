import Head from 'next/head'
import { Fragment, ReactNode } from 'react'

// Components
import { Nav } from '@components/index'

interface Props {
  title?: string
  keywords?: string
  description?: string
  children: ReactNode
}

const Layout = ({ title, keywords, description, children }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <Nav />
      <main>{children}</main>
    </Fragment>
  )
}

Layout.defaultProps = {
  title: 'Welcome | KryptoWorld',
  keywords: 'Bitcoin, btc, Algorand, ALGO',
  description: 'Will add later',
}

export default Layout
