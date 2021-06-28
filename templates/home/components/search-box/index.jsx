import styles from './search-box.module.css'

const SearchBoxComponent = ({ searchHandler }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>Search reservation</h2>
        <form>
          <fieldset>
            <label>
              Code:
              <input type="text" />
            </label>
            <label>
              Lastname:
              <input type="text" />
            </label>
          </fieldset>
          <button onClick={searchHandler}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBoxComponent