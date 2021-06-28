export default function DetailsComponent({ reservation }) {
  return (
    <div>
      <h1>Reservation: {reservation.code}</h1>
      <h3>Details</h3>
      <div>
        <div>
          Origin: {reservation.trip.details.origin}
				</div>
        <div>
          Destination: {reservation.trip.details.destination}
				</div>
        <div>
          Departure: {reservation.trip.details.departure}
				</div>
      </div>
    </div>
  )
}