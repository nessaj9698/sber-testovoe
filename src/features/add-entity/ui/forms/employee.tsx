import { useFormik } from "formik";
import { employeeApi } from "entities/employee";
import { useStyles } from "shared/hooks/use-styles";
import { Button } from "@mui/material";
import { Input } from "@mui/material";

type Props = {
  companyId: number;
};

export const AddEmployeeForm = ({ companyId }: Props) => {
  const [trigger] = employeeApi.useAddEmployeeMutation();
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      trigger({ companyId, name: values.text });
    },
  });
  const { classes } = useStyles();
  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.formHeading}>Добавить сотрудника</h3>
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

        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
};
