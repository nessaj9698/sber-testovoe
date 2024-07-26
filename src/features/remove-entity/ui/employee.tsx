import { Button } from "@mui/material";
import { employeeApi } from "entities/employee";

type Props = {
  id: number;
  companyId: number;
};

export const RemoveEmployee = ({ id, companyId }: Props) => {
  const [trigger] = employeeApi.useRemoveEmployeeMutation();
  return (
    <Button onClick={() => trigger({ companyId, employeeId: id })}>
      Удалить
    </Button>
  );
};
