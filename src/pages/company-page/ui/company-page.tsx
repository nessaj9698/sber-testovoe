import { EntitiesList } from "widgets/entities-list";
import { employeeApi } from "entities/employee";
import { useParams } from "react-router-dom";
import { AddEntity } from "features/add-entity";
import { useNavigate } from "react-router-dom";
import { useStyles } from "shared/hooks/use-styles";

export const CompanyPage = () => {
  const { companyId } = useParams();
  const { data } = employeeApi.useGetEmployeesQuery(Number(companyId));
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <div className={classes.pageInner}>
      <button onClick={() => navigate(-1)} className={classes.backButton}>
        Назад
      </button>
      {data && data?.length > 0 ? (
        <EntitiesList entities={data} companyId={Number(companyId)} />
      ) : (
        <h1>Список сотрудников пуст</h1>
      )}
      <AddEntity entityType="employee" id={Number(companyId)} />
    </div>
  );
};
