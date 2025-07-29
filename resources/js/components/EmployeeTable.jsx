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
} from "@mui/material";
import { Head, Link, router } from "@inertiajs/react";
import { Visibility, Edit, Delete } from "@mui/icons-material";

const EmployeeTable = ({ employees, searchTerm }) => {
    const [search, setSearch] = useState(searchTerm || "");
    const isMobile = useMediaQuery("(max-width:600px)");

    // Debounce search input
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

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.get(
            "/employees",
            { search },
            { preserveState: true, preserveScroll: true }
        );
    };

    // Pagination controls
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

            {/* Search bar */}
            <form onSubmit={handleSearchSubmit}>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
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

            {/* Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Department</TableCell>
                            {!isMobile && <TableCell>Plantilla</TableCell>}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedEmployees.length === 0 ? (
                            <TableRow
                                sx={{
                                    height: {
                                        xs: 40, // mobile row height
                                        md: 56, // desktop row height (adjust here)
                                    },
                                    py: {
                                        xs: 0.5,
                                        md: 1.5, // vertical padding
                                    },
                                }}
                            >
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
                                    {!isMobile && (
                                        <TableCell>
                                            {employee.plantilla_position}
                                        </TableCell>
                                    )}
                                    <TableCell>
                                        {isMobile ? (
                                            <>
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
                                                        handleDelete(
                                                            employee.id
                                                        )
                                                    }
                                                    color="error"
                                                >
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <>
                                                <Button
                                                    component={Link}
                                                    href={route(
                                                        "employees.show",
                                                        employee.id
                                                    )}
                                                    variant="contained"
                                                    color="success"
                                                    size="small"
                                                >
                                                    View
                                                </Button>
                                                {/* <Button
                                                    component={Link}
                                                    href={route(
                                                        "employees.edit",
                                                        employee.id
                                                    )}
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    sx={{ ml: 1 }}
                                                >
                                                    Edit
                                                </Button> */}
                                                {/* <Button
                                                    onClick={() =>
                                                        handleDelete(
                                                            employee.id
                                                        )
                                                    }
                                                    variant="contained"
                                                    color="error"
                                                    size="small"
                                                    sx={{ ml: 1 }}
                                                >
                                                    Delete
                                                </Button> */}
                                            </>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                component="div"
                count={employees.total}
                page={employees.current_page - 1}
                onPageChange={handlePageChange}
                rowsPerPage={employees.per_page}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPageOptions={[10, 20, 50, 100]}
                sx={{
                    fontSize: {
                        xs: "0.75rem", // smaller font on mobile
                        sm: "0.875rem", // normal on small screens
                        md: "1rem", // standard on medium screens
                    },
                    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                        {
                            fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem",
                            },
                        },
                    "& .MuiTablePagination-actions": {
                        "& button": {
                            fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem",
                            },
                        },
                    },
                }}
            />
        </>
    );
};

export default EmployeeTable;
