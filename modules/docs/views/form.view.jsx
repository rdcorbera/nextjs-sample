import { useRouter } from 'next/router'

export default function FormView({ reservation }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('reservation')
  }

  return (
    <div>
      <h1>Complete Documentation</h1>
      <form>
        <fieldset>
          <label>
            Firstname
            <input type="text" />
          </label>
          <label>
            Lastname
            <input type="text" />
          </label>
        </fieldset>
        <button onClick={handleClick}>Save</button>
      </form>
    </div>
  )
}