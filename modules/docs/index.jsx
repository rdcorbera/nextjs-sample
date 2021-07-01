import { useState } from 'react'

import PassengersView from './views/passengers.view'
import FormView from './views/form.view'

import { DocumentationContext } from './contexts/docs.context'

export default function DocumentationModule({ reservation, fields }) {

  const [selectedPassenger, setSelectedPassenger] = useState(null)

  return (
    <DocumentationContext.Provider value={{
      passengers: reservation.passengers,
      selectedPassenger,
      setSelectedPassenger
    }}>
      <DocumentationContext.Consumer>
        {({ selectedPassenger }) => {
          if (selectedPassenger) {
            return <FormView passenger={selectedPassenger} fields={fields} />
          }

          return <PassengersView passengers={reservation.passengers} />
        }}
      </DocumentationContext.Consumer>
    </DocumentationContext.Provider>
  )
}