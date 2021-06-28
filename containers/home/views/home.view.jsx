import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from './home.module.css'

import Footer from '../../../components/molecules/footer'
import Title from '../components/title'
import SearchBox from '../components/search-box'

export default function HomeView() {
  const router = useRouter()

  const searchHandler = (searchParams) => {
    fetch('http://localhost:3100/api/reservations/code/' + searchParams.code)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.json())
      } else {
        return res.json()
      }
    })
    .then(reservation => {
      console.log(reservation)
      router.push('reservation')
    })
    .catch(function(error) {
      console.log(error.message);
    })
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
        <SearchBox onSearch={searchHandler} />
      </main>

      <Footer />
    </div>
  )
}
