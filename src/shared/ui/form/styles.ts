import { tss } from 'tss-react'
import { colors } from 'shared/styles'

export const useStyles = tss.create({
  formTitle: {
    fontSize: '24px',
  },

  formWrapper: {
    padding: '0 32px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'center',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%',
  },

  textInput: {
    fontSize: '14px',
  },

  errorBlock: {
    textAlign: 'center',
    color: colors.red,
  },
})
