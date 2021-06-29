export default function PassengersView({ passengers }) {
  return (
    <div>
      <h3>Passengers</h3>
      <ul>
        {passengers.map(p =>
          <li>{p.firstname} {p.lastname}</li>
        )}
      </ul>
    </div>
  )
}