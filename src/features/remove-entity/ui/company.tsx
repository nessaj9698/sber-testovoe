import { Button } from "@mui/material";
import { companyApi } from "entities/companies";

type Props = {
  id: number;
};

export const RemoveCompany = ({ id }: Props) => {
  const [trigger] = companyApi.useRemoveCompanyMutation();
  return <Button onClick={() => trigger(id)}>Удалить</Button>;
};
