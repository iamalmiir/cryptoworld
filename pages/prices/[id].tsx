import Layout from '@components/Layout'
import { useRouter } from 'next/router'

const CryptoPrice = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  return (
    <Layout>
      <h2>Hello</h2>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const key = process.env.RAPID_API
  return {
    props: {
      key_api: key,
    },

    revalidate: 1,
  }
}

export default CryptoPrice
