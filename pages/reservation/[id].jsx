import ReservationModule from '../../modules/reservation'

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`http://localhost:3100/api/reservations/${id}`)

  if (res.status == 404) {
    return {
      notFound: true,
    }
  }

  const reservation = await res.json()

  // Pass data to the page via props
  return { props: { reservation } }
}

export default function Reservation({ reservation }) {
  return (
    <ReservationModule reservation={reservation} />
  )
}