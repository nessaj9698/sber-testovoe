import { Button } from '@mui/material'
import { useRemoveEmployeeMutation } from 'entities/employee'

type Props = {
  id: number
  companyId: number
}

export const RemoveEmployee = ({ id, companyId }: Props) => {
  const [removeEmployee] = useRemoveEmployeeMutation()

  return (
    <Button
      onClick={() => removeEmployee({ companyId, employeeId: id })}
      size='small'
    >
      Удалить
    </Button>
  )
}
