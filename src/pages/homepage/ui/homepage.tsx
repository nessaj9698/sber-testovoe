import { companyApi } from "entities/companies";
import { EntitiesList } from "widgets/entities-list";
import { AddEntity } from "features/add-entity";
import { useStyles } from "shared/hooks/use-styles";

export const HomePage = () => {
  const { data } = companyApi.useGetCompaniesQuery();
  const { classes } = useStyles();

  return (
    <div className={classes.pageInner}>
      {data && data.length > 0 ? (
        <EntitiesList entities={data} entityType="company"/>
      ) : (
        <h1>Список компаний пуст</h1>
      )}
      <AddEntity entityType="company" />
    </div>
  );
};
