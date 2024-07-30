import { Button } from '@mui/material'
import { useState } from 'react'
import { ChangeCompanyForm } from './forms/company'
import type { Entities } from 'shared/types'
import { ChangeEmployeeForm } from './forms/employee'
import { PopUp } from 'shared/ui/popup'

type Props = {
  id: number
  entityType: Entities
  initialValue: string
  companyId?: number
}

export const ChangeEntity = ({
  id,
  companyId,
  initialValue,
  entityType,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpenModal} size='small'>
        Изменить
      </Button>
      {isModalOpen && (
        <PopUp
          open={isModalOpen}
          onClose={handleCloseModal}
          children={
            entityType === 'company' ? (
              <ChangeCompanyForm
                id={id}
                initialValue={initialValue}
                onClose={handleCloseModal}
              />
            ) : (
              <ChangeEmployeeForm
                id={id}
                companyId={companyId!}
                initialValue={initialValue}
                onClose={handleCloseModal}
              />
            )
          }
        />
      )}
    </>
  )
}
