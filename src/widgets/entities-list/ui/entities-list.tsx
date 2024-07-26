import { Employee } from "entities/employee";
import { Company } from "entities/companies";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { isCompany } from "entities/companies";
import { Link } from "react-router-dom";
import { RemoveEmployee } from "features/remove-entity/ui";
import { RemoveCompany } from "features/remove-entity/ui";
import { useStyles } from "shared/hooks/use-styles";
import { ChangeEntity } from "features/change-entity/ui";
import type { Entities } from "shared/types/types";

type Props = {
  entities: Employee[] | Company[];
  companyId?: number;
  entityType: Entities;
};

export const EntitiesList = ({ entities, companyId, entityType }: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.tableWrapper}>
      <Table className={classes.entitiesList}>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="center">Изменить</TableCell>
            <TableCell align="center">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entities.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {isCompany(row) ? (
                  <Link to={`/companies/${row.id}`}>{row.title}</Link>
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell align="center">
                <ChangeEntity
                  id={row.id}
                  companyId={companyId}
                  entityType={entityType}
                />
              </TableCell>
              <TableCell align="center">
                {isCompany(row) ? (
                  <RemoveCompany id={row.id} />
                ) : (
                  <RemoveEmployee id={row.id} companyId={companyId!} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
