import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {

  const { id } = context.params

  const res = await fetch(`http://localhost:3100/api/reservations/` + id)

  if (res.status == 404) {
    //return { notFound: true }
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const reservation = await res.json()

  // Pass data to the page via props
  return { props: { reservation } }
}

export default function Reservation({reservation}) {
  

  return (
    <div>
      <Head>
        <title>Reservation Detail - Server Side</title>
      </Head>
      <h1>Reservation Nro {reservation.id} - Server Side</h1>
      <h2>Status: {reservation.status}</h2>
    </div>
  )
}