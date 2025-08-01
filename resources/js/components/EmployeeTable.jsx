import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TablePagination,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
    TextField,
    Stack,
    IconButton,
    useMediaQuery,
    Card,
    CardContent,
    Typography,
    Divider,
    Box,
} from "@mui/material";
import { Head, Link, router } from "@inertiajs/react";
import { Visibility, Edit, Delete } from "@mui/icons-material";

const EmployeeTable = ({ employees, searchTerm }) => {
    const [search, setSearch] = useState(searchTerm || "");
    const isMobile = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        const debounce = setTimeout(() => {
            router.get(
                "/employees",
                { search },
                { preserveState: true, preserveScroll: true }
            );
        }, 500);
        return () => clearTimeout(debounce);
    }, [search]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.get(
            "/employees",
            { search },
            { preserveState: true, preserveScroll: true }
        );
    };

    const handlePageChange = (event, newPage) => {
        router.get(
            "/employees",
            {
                search,
                page: newPage + 1,
                perPage: employees.per_page,
            },
            { preserveState: true, preserveScroll: true }
        );
    };

    const handleRowsPerPageChange = (event) => {
        const newPerPage = parseInt(event.target.value, 10);
        router.get(
            "/employees",
            {
                search,
                page: 1,
                perPage: newPerPage,
            },
            { preserveState: true, preserveScroll: true }
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            router.delete(`/employees/${id}`);
        }
    };

    const paginatedEmployees = employees.data;

    return (
        <>
            <Head title="Employees" />
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    mb: 2,
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backgroundColor: "#fff",
                }}
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Employee List
                    </Typography>
                    <Button
                        component={Link}
                        href={route("employees.create")}
                        variant="contained"
                        color="primary"
                    >
                        Add New Employee
                    </Button>
                </Stack>

                <form onSubmit={handleSearchSubmit}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="Search"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button type="submit" variant="contained">
                            Search
                        </Button>
                    </Stack>
                </form>
            </Paper>

            {!isMobile ? (
                <TableContainer component={Paper} elevation={2}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Department</TableCell>
                                <TableCell>Plantilla</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedEmployees.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No employees found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                paginatedEmployees.map((employee) => (
                                    <TableRow key={employee.id}>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>
                                            {employee.department?.department_name
                                                ?.split("-")[0]
                                                .trim()}
                                        </TableCell>
                                        <TableCell>
                                            {employee.plantilla_position}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                component={Link}
                                                href={route(
                                                    "employees.show",
                                                    employee.id
                                                )}
                                                color="success"
                                            >
                                                <Visibility />
                                            </IconButton>
                                            <IconButton
                                                component={Link}
                                                href={route(
                                                    "employees.edit",
                                                    employee.id
                                                )}
                                                color="primary"
                                            >
                                                <Edit />
                                            </IconButton>
                                            <IconButton
                                                onClick={() =>
                                                    handleDelete(employee.id)
                                                }
                                                color="error"
                                            >
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Stack spacing={2}>
                    {paginatedEmployees.length === 0 ? (
                        <Typography align="center">
                            No employees found.
                        </Typography>
                    ) : (
                        paginatedEmployees.map((employee) => (
                            <Card key={employee.id} variant="outlined">
                                <CardContent>
                                    <Typography variant="h6">
                                        {employee.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Department:{" "}
                                        {employee.department?.department_name
                                            ?.split("-")[0]
                                            .trim()}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Plantilla: {employee.plantilla_position || "—"}
                                    </Typography>

                                    <Divider sx={{ my: 1 }} />

                                    <Stack direction="row" spacing={1}>
                                        <IconButton
                                            component={Link}
                                            href={route(
                                                "employees.show",
                                                employee.id
                                            )}
                                            color="success"
                                        >
                                            <Visibility fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            component={Link}
                                            href={route(
                                                "employees.edit",
                                                employee.id
                                            )}
                                            color="primary"
                                        >
                                            <Edit fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                handleDelete(employee.id)
                                            }
                                            color="error"
                                        >
                                            <Delete fontSize="small" />
                                        </IconButton>
                                    </Stack>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </Stack>
            )}

            <Paper
                elevation={3}
                sx={{
                    mt: 3,
                    p: 1,
                    backgroundColor: "#fff",
                    position: "sticky",
                    bottom: 0,
                }}
            >
                <TablePagination
                    component="div"
                    count={employees.total}
                    page={employees.current_page - 1}
                    onPageChange={handlePageChange}
                    rowsPerPage={employees.per_page}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    sx={{
                        "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                            {
                                fontSize: "0.875rem",
                            },
                        "& .MuiTablePagination-actions button": {
                            fontSize: "0.875rem",
                        },
                    }}
                />
            </Paper>
        </>
    );
};

export default EmployeeTable;
