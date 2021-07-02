import { useState } from 'react'

import styles from './index.module.css'

/*
  SearchBox deberia ser separado en un componente contenedor y presentacional
  Contenedor: Llevarse la lógica de state y manejo de interacciones
  Presentacional: Presentar la data y manejar el submit de un formulario por ejemplo
*/
const SearchBoxComponent = ({ onSearch }) => {

  const [data, setData] = useState({
    code: '',
    lastname: ''
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    onSearch(data)
  }

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>Search reservation</h2>
        <form onSubmit={onSubmitHandler}>
          <fieldset>
            <label>
              Code:
              <input type="text" onChange={handleInputChange} name="code" />
            </label>
            <label>
              Lastname:
              <input type="text" onChange={handleInputChange} name="lastname" />
            </label>
          </fieldset>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBoxComponent