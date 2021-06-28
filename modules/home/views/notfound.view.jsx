import styles from './notfound.module.css'
import {HomeContext} from '../contexts/home.context'

export default function NotFoundView() {
  return (
    <HomeContext.Consumer>
      {({ searchParams, resetError }) => 
      <div className={styles.container}>
        <h1>Reservation "{searchParams.code}" not found</h1>
        <button onClick={resetError}>Search Again</button>
      </div>
      }
    </HomeContext.Consumer>
  )
}