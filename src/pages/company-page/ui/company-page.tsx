import { EntitiesList } from 'widgets/entities-list'
import { useGetEmployeesQuery } from 'entities/employee'
import { useParams } from 'react-router-dom'
import { AddEntity } from 'features/add-entity'
import { useNavigate } from 'react-router-dom'
import { useStyles } from './styles'
import { Button } from '@mui/material'

export const CompanyPage = () => {
  const { companyId } = useParams()
  const { data } = useGetEmployeesQuery(Number(companyId))

  const navigate = useNavigate()
  const { classes } = useStyles()

  return (
    <>
      <Button onClick={() => navigate(-1)} className={classes.backButton}>
        Назад
      </Button>
      {data && data?.length > 0 ? (
        <EntitiesList
          entities={data}
          companyId={Number(companyId)}
          entityType='employee'
        />
      ) : (
        <h1>Список сотрудников пуст</h1>
      )}
      <AddEntity entityType='employee' id={Number(companyId)} />
    </>
  )
}
