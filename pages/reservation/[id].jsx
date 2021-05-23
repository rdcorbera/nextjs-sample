import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Reservation() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>Reservation Detail</title>
      </Head>
      <h1>Reservation Nro {id}</h1>
    </div>
  )
}