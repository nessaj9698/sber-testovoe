import { useFormik } from "formik";
import { companyApi } from "entities/companies";
import { useStyles } from "shared/hooks/use-styles";
import { Button } from "@mui/material";
import { Input } from "@mui/material";

export const AddCompanyForm = () => {
  const [trigger] = companyApi.useAddCompanyMutation();
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      trigger(values.text);
    },
  });

  const { classes } = useStyles();
  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.formHeading}>Добавить компанию</h3>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="text"
          name="text"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.text}
          placeholder="Название компании"
          required
        />

        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
};
