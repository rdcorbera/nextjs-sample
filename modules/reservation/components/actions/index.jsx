export default function ActionsComponent({ handleDocAction }) {

  const handleCompleteDocs = (e) => {
    e.preventDefault()
    handleDocAction()
  }

  return (
    <button onClick={handleCompleteDocs}>Complete Documentation</button>
  )
}