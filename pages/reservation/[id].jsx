import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {

  const { id } = context.params

  const res = await fetch(`http://localhost:3100/api/reservations/` + id)
  const reservation = await res.json()

  // Pass data to the page via props
  return { props: { reservation } }
}

export default function Reservation({reservation}) {
  

  return (
    <div>
      <Head>
        <title>Reservation Detail</title>
      </Head>
      <h1>Reservation Nro {reservation.id}</h1>
      <h2>Status: {reservation.status}</h2>
    </div>
  )
}