import { useFormik } from "formik";
import { employeeApi } from "entities/employee";
import { useStyles } from "shared/hooks/use-styles";
import { Button } from "@mui/material";
import { Input } from "@mui/material";

type Props = {
  id: number;
  companyId: number;
};

export const ChangeEmployeeForm = ({ id, companyId }: Props) => {
  const [trigger] = employeeApi.useEditEmployeeMutation();
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      trigger({ employeeId: id, companyId, name: values.text });
    },
  });
  const { classes } = useStyles();

  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.formHeading}>Изменить сотрудника</h3>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="text"
          name="text"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.text}
          placeholder="Имя сотрудника"
          required
        />

        <Button type="submit">Изменить</Button>
      </form>
    </div>
  );
};
