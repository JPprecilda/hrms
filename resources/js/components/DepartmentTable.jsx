import React, { useState, useEffect } from 'react';
import { Table, TableBody, TablePagination, TableCell, TableContainer, TableHead, TableRow, Button, Paper, TextField, Stack } from '@mui/material';
import { Link, router, usePage } from '@inertiajs/react';

const DepartmentTable = ({ departments, searchTerm }) => {
  const [search, setSearch] = useState(searchTerm || '');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.get('/departments', { search }, {
      preserveState: true,
      preserveScroll: true,
    });
  };

  // Live search on key change with debounce
  useEffect(() => {
    const debounce = setTimeout(() => {
      router.get('/departments', { search }, {
        preserveState: true,
        preserveScroll: true,
      });
    }, 500);

    return () => clearTimeout(debounce);
  }, [search]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedDepartment = departments.data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
              <TableCell>Department Name</TableCell>
              <TableCell>Department Head</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedDepartment.map((departments) => (
              <TableRow key={departments.id}>
                <TableCell>{departments.department_name}</TableCell>
                <TableCell>
                  <Button component={Link} href={route('departments.show', departments.id)} variant='contained' color='success'>View</Button>
                  <Button component={Link} href={`/departments/${departments.id}/edit`} variant="contained" color="primary" sx={{ ml: 2 }}>Edit</Button>
                  <Button
                    onClick={() => handleDelete(departments.id)}
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
        count={departments.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this employee?')) {
    router.delete(`/departments/${id}`);
  }
};

export default DepartmentTable;
