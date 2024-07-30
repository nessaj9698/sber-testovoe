import { Button } from '@mui/material'
import { useRemoveCompanyMutation } from 'entities/companies'

type Props = {
  id: number
}

export const RemoveCompany = ({ id }: Props) => {
  const [removeCompany] = useRemoveCompanyMutation()

  return (
    <Button onClick={() => removeCompany(id)} size='small'>
      Удалить
    </Button>
  )
}
