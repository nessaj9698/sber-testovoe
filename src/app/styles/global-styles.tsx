import { GlobalStyles } from 'tss-react'

export const AppStyles = () => (
  <GlobalStyles
    styles={{
      '*': {
        fontFamily: 'Helvetica',
      },
      body: {
        margin: 0,
        overflow: 'hidden',
      },
      h1: {
        width: '100%',
        textAlign: 'center',
      },
      input: {
        width: '100%',
      },
      '#root': {
        backgroundColor: '#efefef',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '93vh',
        padding: '32px',
      },
    }}
  />
)
