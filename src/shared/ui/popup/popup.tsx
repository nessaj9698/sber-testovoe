import { Dialog, DialogTitle } from '@mui/material'
import { ReactElement } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useStyles } from './styles'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactElement
}

export const PopUp = ({ children, onClose, ...props }: Props) => {
  const { classes } = useStyles()

  return (
    <Dialog {...props} onClose={onClose}>
      <DialogTitle className={classes.popUpTitle}>
        <CloseIcon className={classes.closeIcon} onClick={onClose} />
      </DialogTitle>
      {children}
    </Dialog>
  )
}
