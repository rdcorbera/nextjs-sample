import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from './home.module.css'

import Footer from '../../../components/molecules/footer'
import Title from '../components/title'
import SearchBox from '../components/search-box'

export default function HomeContainer() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('reservation')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SkyX Airline</title>
        <meta name="description" content="SkyX Airline Web Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title text="Welcome to SkyX" />
        <SearchBox searchHandler={handleClick} />
      </main>

      <Footer />
    </div>
  )
}
