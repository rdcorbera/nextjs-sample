import PassengersView from './views/passengers.view'

import { DocumentationContext } from './contexts/docs.context'

export default function DocumentationModule({ reservation }) {

  return (
    <PassengersView passengers={reservation.passengers} />
  )
}