import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default ({ resource, pending }: { resource: any; pending: boolean }) => {
  if (resource === undefined) return null;
  const { deposits } = resource.read();
  let priceArray: number[] = [];

  const getTotalAmountDeposited = () => {
    console.log(deposits);
    Object.values(deposits).map((x: any) => priceArray.push(x.amount));

    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;

    const totalPrice = priceArray.reduce(reducer, priceArray.length - 1);

    return totalPrice;
  };

  return (
    <TableContainer style={{ height: 500 }}>
      <Table sx={{ minWidth: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell align="left">Created</StyledTableCell>
            <StyledTableCell align="left">Reference</StyledTableCell>
            <StyledTableCell align="right">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Total: ${getTotalAmountDeposited()}
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deposits.map((deposit: any) => (
            <TableRow
              key={deposit.reference}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {deposit.amount}
              </TableCell>
              <TableCell align="left">
                {deposit.created.substring(0, 10)}
              </TableCell>
              <TableCell align="left" colSpan={2}>
                {deposit.reference}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
