import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { HomeContext } from '../contexts/home.context'

import styles from './home.module.css'

import Footer from '../../../components/molecules/footer'
import Title from '../components/title'
import SearchBox from '../components/search-box'

/*
  El manejo de comunicación con el BFF deberia ser mediante un hook
  Revisar el httpservice
*/
export default function HomeView() {
  const router = useRouter()
  const { triggerError } = useContext(HomeContext)

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
      router.push('reservation/' + reservation.id)
    })
    .catch(function(error) {
      triggerError(searchParams)
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
        <Title text="Welcome to SkyX Airline" />
        <SearchBox onSearch={searchHandler} />
      </main>

      <Footer />
    </div>
  )
}
