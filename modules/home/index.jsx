import { useState } from 'react'
import HomeView from './views/home.view'
import NotFoundView from './views/notfound.view'

import { HomeContext } from './contexts/home.context'

export default function HomeModule() {

  const [searchParams, setSearchParams] = useState({ code: '', lastname: '' })
  const [showError, setShowError] = useState(false)

  const handleError = (searchParams) => {
    setSearchParams(searchParams)
    setShowError(true)
  }

  const handleResetError = () => {
    setShowError(false)
  }

  return (
    <HomeContext.Provider value={{
        searchParams: searchParams,
        showError: showError,
        triggerError: handleError,
        resetError: handleResetError
      }}>
      <HomeContext.Consumer>
        {({showError}) => {
          if (showError) return <NotFoundView />

          return <HomeView />
        }}
      </HomeContext.Consumer>
    </HomeContext.Provider> 
  )
}
