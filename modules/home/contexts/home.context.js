import React from 'react'

export const HomeContext = React.createContext({
    searchParams: { code: '', lastname: '' },
    showError: false,
    triggerError: () => {},
    resetError: () => {}
})