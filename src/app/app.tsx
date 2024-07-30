import { compose } from '@reduxjs/toolkit'
import { withStore } from './store'
import { withTheme } from './styles'
import { FC } from 'react'
import { AppStyles } from './styles'
import { Router } from './router'
import { storageManipulator } from 'shared/lib/storage'

const withProviders = compose<FC>(withStore, withTheme)

function App() {
  storageManipulator.initializeMockData()

  return (
    <>
      <AppStyles />
      <Router />
    </>
  )
}

export default withProviders(App)
