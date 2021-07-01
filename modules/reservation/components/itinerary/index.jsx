import Link from 'next/link'

export default function ItineraryComponent({ reservation }) {
  return (
    <div>
      <h3>Itinerary</h3>
      <ul>
        {reservation.trip.outbound.flights.map(flight => 
          <li key={flight.number + flight.origin}>Fight Number {flight.number} - {flight.departure} - Origin {flight.origin} - Destination {flight.destination} <Link href="/boarding-pass"><a>Boarding Pass</a></Link></li>
        )}
      </ul>
    </div>
  )
}