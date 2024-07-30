import { Button } from '@mui/material'
import { useState } from 'react'
import { AddCompanyForm } from './forms'
import { AddEmployeeForm } from './forms'
import { useStyles } from './styles'
import { PopUp } from 'shared/ui/popup'

type Props = {
  entityType: 'company' | 'employee'
  id?: number
}

export const AddEntity = ({ entityType, id }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { classes } = useStyles()

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button onClick={handleModalOpen} className={classes.addButton}>
        Добавить
      </Button>
      <PopUp
        open={isModalOpen}
        onClose={handleModalClose}
        children={
          entityType === 'company' ? (
            <AddCompanyForm onClose={handleModalClose} />
          ) : (
            <AddEmployeeForm companyId={id!} onClose={handleModalClose} />
          )
        }
      />
    </>
  )
}
