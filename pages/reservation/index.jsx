import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Reservation() {
	const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('docs')
  }

	return (
		<div>
			<h1>Reservation: QWERTY</h1>
			<h3>Details</h3>
			<div>
				<div>
					Origin: PMC
				</div>
				<div>
					Origin: BOG
				</div>
				<div>
					Departure: 2019-01-01
				</div>
			</div>
			<h3>Itinerary</h3>
			<ul>
				<li>Fight Number SX1234 - 2019-01-01 14:00:00 - Origin PMC - Destination SCL <Link href="boarding-pass"><a>Boarding Pass</a></Link></li>
				<li>Fight Number SX1235 - 2019-01-01 16:00:00 - Origin SCL - Destination LIM <Link href="boarding-pass"><a>Boarding Pass</a></Link></li>
				<li>Fight Number SX1236 - 2019-01-01 18:00:00 - Origin LIM - Destination BOG <Link href="boarding-pass"><a>Boarding Pass</a></Link></li>
			</ul>
			<button onClick={handleClick}>Complete Documentation</button>
		</div>
	)
}