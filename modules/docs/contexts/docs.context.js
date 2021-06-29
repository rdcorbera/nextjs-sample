import React from 'react'

export const DocumentationContext = React.createContext({
  passengers: [],
  selectedPassenger: null,
  fieldsToSave: [],
  passengersCompleted: []
})