import Head from 'next/head'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3100/api/reservations')
  const reservations = await res.json()

  return {
    props: {
      reservations,
    },
    revalidate: 1,
  }
} 

export default function Reservations({ reservations }) {
  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((r) => (
          <li>{r.id} - {r.status}</li>
        ))}
      </ul>
    </div>
  )
}