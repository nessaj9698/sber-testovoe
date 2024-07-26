import { useFormik } from "formik";
import { companyApi } from "entities/companies";
import { useStyles } from "shared/hooks/use-styles";
import { Button } from "@mui/material";
import { Input } from "@mui/material";

type Props = {
  id: number;
};

export const ChangeCompanyForm = ({ id }: Props) => {
  const [trigger] = companyApi.useEditCompanyMutation();
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      trigger({ id, title: values.text });
    },
  });

  const { classes } = useStyles();
  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.formHeading}>Изменить компанию</h3>
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

        <Button type="submit">Изменить</Button>
      </form>
    </div>
  );
};
