import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Reservation() {
    const router = useRouter()
    const id = router.query.id
    const { data, error } = useSWR('http://localhost:3100/api/reservations/' + id, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const reservation = data

    return (
      <div>
        <Head>
          <title>Reservation Detail - Client Side</title>
        </Head>
        <h1>Reservation Nro {reservation.id} - Server Side</h1>
        <h2>Status: {reservation.status}</h2>
      </div>
    )
  }