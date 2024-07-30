import { tss } from 'tss-react'

export const useStyles = tss.create({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    cursor: 'pointer',
  },
  popUpTitle: {
    textAlign: 'right',
  },
})
