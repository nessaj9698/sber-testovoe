import { useGetCompaniesQuery } from 'entities/companies'
import { EntitiesList } from 'widgets/entities-list'
import { AddEntity } from 'features/add-entity'

export const HomePage = () => {
  const { data } = useGetCompaniesQuery()

  return (
    <>
      {data && data.length > 0 ? (
        <EntitiesList entities={data} entityType='company' />
      ) : (
        <h1>Список компаний пуст</h1>
      )}
      <AddEntity entityType='company' />
    </>
  )
}
