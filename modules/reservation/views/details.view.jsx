import { useRouter } from 'next/router'

import DetailsComponent from '../components/details'
import ItineraryComponent from '../components/itinerary'
import ActionsComponent from '../components/actions'

export default function DetailsView({ reservation }) {
  const router = useRouter()

  const handleClick = () => {
    router.push('/docs/' + reservation.id)
  }

  return (
    <div>
      <DetailsComponent reservation={reservation} />
      <ItineraryComponent reservation={reservation} />
      <ActionsComponent handleDocAction={handleClick} />
    </div>
  )
}