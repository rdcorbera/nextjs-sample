import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3100/api/reservations')
  const reservations = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = reservations.map((reservation) => ({
    params: { id: reservation.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  console.log(params)
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch('http://localhost:3100/api/reservations/' + params.id)
  const reservation = await res.json()

  // Pass post data to the page via props
  return { props: { reservation } }
}

export default function Reservation({ reservation }) {
  
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Reservation Detail - Static Build</title>
      </Head>
      <h1>Reservation Nro {reservation.id} - Static Build</h1>
      <h2>Status: {reservation.status}</h2>
    </div>
  )
}