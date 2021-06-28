import styles from './title.module.css'

const TitleComponent = ({ text }) => {
  return (
    <h1 className={styles.title}>
      {text}
    </h1>
  )
}

export default TitleComponent