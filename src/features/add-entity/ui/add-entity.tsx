import { Button } from "@mui/material";
import { useState } from "react";
import { Modal } from "@mui/material";
import { AddCompanyForm } from "./forms/company";
import { AddEmployeeForm } from "./forms/employee";
import { useStyles } from "shared/hooks/use-styles";

type Props = {
  entityType: "company" | "employee";
  id?: number;
};

export const AddEntity = ({ entityType, id }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { classes } = useStyles();
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className={classes.addButton}>
        Добавить
      </Button>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className={classes.modal}
        children={
          entityType === "company" ? (
            <AddCompanyForm />
          ) : (
            <AddEmployeeForm companyId={id!} />
          )
        }
      />
    </>
  );
};
