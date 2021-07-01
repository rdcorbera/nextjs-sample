import { useContext } from 'react'

import { DocumentationContext } from '../contexts/docs.context'

export default function PassengersView({ passengers }) {

  const { setSelectedPassenger } = useContext(DocumentationContext)

  const handlePassengerSelect = (passenger) => {
    setSelectedPassenger(passenger)
  }

  return (
    <div>
      <h3>Passengers</h3>
      <ul>
        {passengers.map(p =>
          <li key={p.id}>{p.firstname} {p.lastname} - <button onClick={() => handlePassengerSelect(p)}>Select</button></li>
        )}
      </ul>
    </div>
  )
}