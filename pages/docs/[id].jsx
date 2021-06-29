import DocumentationModule from '../../modules/docs'

export async function getServerSideProps(context) {
  const { id } = context.params
  const resReserv = await fetch(`http://localhost:3100/api/reservations/${id}`)
  const reservation = await resReserv.json()

  const resDocs = await fetch(`http://localhost:3100/api/documentation/${id}`)
  const documentation = await resDocs.json()

  // Pass data to the page via props
  return { props: {
    reservation,
    fields: documentation.fields,
    paxsStatus: documentation.passengers
  } }
}

export default function Documentation({ reservation, fields, paxsStatus }) {
  return (
    <DocumentationModule
      reservation={reservation}
      fields={fields}
      paxsStatus={paxsStatus}
    />
  )
}