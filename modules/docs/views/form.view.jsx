import { useContext } from 'react'
import { useRouter } from 'next/router'

import { DocumentationContext } from '../contexts/docs.context'

export default function FormView({ passenger, fields }) {
  const router = useRouter()
  const { setSelectedPassenger } = useContext(DocumentationContext)

  const handleClick = (e) => {
    e.preventDefault()
    setSelectedPassenger(null)
  }

  return (
    <div>
      <h1>Complete Documentation</h1>
      <h3>{passenger.firstname} {passenger.lastname}</h3>
      <form>
        <fieldset>
          {fields.map(f =>
            <div key={f.key}>
              <label>
                {f.key}
              <input type="text" />
              </label>
            </div>
          )}
        </fieldset>
        <button onClick={handleClick}>Save</button>
      </form>
    </div>
  )
}