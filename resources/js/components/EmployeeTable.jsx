import React, { useState, useEffect } from 'react';
import { Table, TableBody, TablePagination, TableCell, TableContainer, TableHead, TableRow, Button, Paper, TextField, Stack } from '@mui/material';
import { Link, router, usePage } from '@inertiajs/react';

const EmployeeTable = ({ employees, searchTerm, department }) => {
  const [search, setSearch] = useState(searchTerm || '');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.get('/employees', { search }, {
      preserveState: true,
      preserveScroll: true,
    });
  };

  // Live search on key change with debounce
  useEffect(() => {
    const debounce = setTimeout(() => {
      router.get('/employees', { search }, {
        preserveState: true,
        preserveScroll: true,
      });
    }, 500);

    return () => clearTimeout(debounce);
  }, [search]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (event, newPage) => {
  router.get('/employees', {
    search,
    page: newPage + 1, // Laravel pagination starts at 1
  }, {
    preserveState: true,
    preserveScroll: true,
  });
};


  const handleRowsPerPageChange = (event) => {
  const newRows = parseInt(event.target.value, 10);
  setRowsPerPage(newRows);
  setPage(0);
  router.get('/employees', {
    search,
    page: 1,
    perPage: newRows
  }, {
    preserveState: true,
    preserveScroll: true,
  });
};


  const paginatedEmployees = employees.data;

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="contained">Search</Button>
        </Stack>
      </form>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Plantilla</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department.department_name.split('-')[0].trim()}</TableCell>
                <TableCell>{employee.plantilla_position}</TableCell>
                <TableCell>
                  <Button component={Link} href={route('employees.show', employee.id)} variant='contained' color='success'>View</Button>
                  <Button component={Link} href={`/employees/${employee.id}/edit`} variant="contained" color="primary" sx={{ ml: 2 }}>Edit</Button>
                  <Button
                    onClick={() => handleDelete(employee.id)}
                    variant="contained"
                    color="error"
                    sx={{ ml: 2 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={employees.total}
        rowsPerPage={employees.per_page}
        page={employees.current_page - 1}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this employee?')) {
    router.delete(`/employees/${id}`);
  }
};

export default EmployeeTable;
