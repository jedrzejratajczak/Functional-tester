import React, { useState } from 'react';
import { Table, TableBody, TableRow, TableCell, TableContainer, TablePagination, Paper } from '@mui/material';

import EnhancedTableHead from './TableHead';
import EnhancedTableRow from './TableRow';


const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const EnhancedTable = ({ headCells, rowCells, rows, rowsPerPageOptions }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const adjustPerPageRowsOptions = (rowsPerPageOptions, rowsNumber) => {
    const adjustedRowsPerPageOptions = [];
  
    rowsPerPageOptions.forEach((interval) => {
      if (interval <= rowsNumber) {
        adjustedRowsPerPageOptions.push(interval);
      } else if (rowsPerPageOptions.at(-1) !== rowsNumber) {
        adjustedRowsPerPageOptions.push(rowsNumber);
      }
    });
  
    return adjustedRowsPerPageOptions;
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Paper>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headCells={headCells}
          />
          <TableBody>
            {rows.sort(getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                  <EnhancedTableRow key={row.id} rowCells={rowCells} row={row} />
                )
              )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 66.8 * emptyRows }}>
                <TableCell colSpan={headCells.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={adjustPerPageRowsOptions(rowsPerPageOptions, rows.length)}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EnhancedTable;