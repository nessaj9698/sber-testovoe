import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FC } from 'react'
import { colors } from 'shared/styles'

const theme = createTheme({
  typography: {
    body1: { fontSize: '1.4rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.yellow,
          color: colors.almostBlack,
          fontWeight: 600,
          textTransform: 'unset',
          '&:hover': {
            backgroundColor: colors.hoverYellow,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:after': {
            borderBottom: 'unset',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          minWidth: '460px',
        },
      },
    },
  },
})

export const withTheme = function <P extends object>(Component: FC<P>): FC<P> {
  return (props: P) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}
