import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { useStyles } from "shared/hooks/use-styles";
import { ChangeCompanyForm } from "./forms/company/change-company";
import type { Entities } from "shared/types/types";
import { ChangeEmployeeForm } from "./forms/employee/change-employee";

type Props = {
  id: number;
  companyId?: number;
  entityType: Entities;
};

export const ChangeEntity = ({ id, companyId, entityType }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Изменить</Button>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          className={classes.modal}
          onClose={() => setIsModalOpen(false)}
          children={
            entityType === "company" ? (
              <ChangeCompanyForm id={id} />
            ) : (
              <ChangeEmployeeForm id={id} companyId={companyId!} />
            )
          }
        />
      )}
    </>
  );
};
