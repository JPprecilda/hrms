import Layout from "@/Layout/Layout";
import {
    TextField,
    Button,
    Typography,
    Box,
    Paper,
    Avatar,
    FormControl,
    Select,
    MenuItem,
    Stack,
    Link,
} from "@mui/material";
import { useForm } from "@inertiajs/react";
import EmployeeShowLayout from "@/components/EmployeeShowLayout";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import format from "date-fns/format";

const edit = ({ employee, departments }) => {
    const { data, setData, put, processing, errors } = useForm({
        // name: employee.name,
        // email: employee.email,
        // position: employee.position,


        // name: employee.name,
        // education_attainment: employee.education_attainment,
        // eligibility: employee.eligibility,
        // email: employee.email,
        // phone: employee.phone,
        // address: employee.address,
        // department_id: employee.department_id,
        // classification: employee.classification,
        // plantilla: employee.plantilla,
        // job_description: employee.job_description,
        // date_hired: employee.date_hired,
        // salary_grade: employee.salary_grade,
        // years_in_service: employee.years_in_service,
        // employment_status: employee.employment_status,
        // remarks: employee.remarks,
        // picture: employee.picture,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/employees/${employee.id}`, {
            onSuccess: () => {
                alert("Employee updated!");
            },
        });
    };

    return (
        // <Layout>
        //   <Typography variant="h4" gutterBottom>Edit Employee</Typography>
        //   <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        //     <TextField
        //       label="Name"
        //       value={data.name}
        //       onChange={(e) => setData('name', e.target.value)}
        //       error={!!errors.name}
        //       helperText={errors.name}
        //     />
        //     <TextField
        //       label="Email"
        //       value={data.email}
        //       onChange={(e) => setData('email', e.target.value)}
        //       error={!!errors.email}
        //       helperText={errors.email}
        //     />
        //     <TextField
        //       label="Position"
        //       value={data.position}
        //       onChange={(e) => setData('position', e.target.value)}
        //       error={!!errors.position}
        //       helperText={errors.position}
        //     />
        //     <Button type="submit" variant="contained" color="primary" disabled={processing}>
        //       Update Employee
        //     </Button>
        //   </Box>
        // </Layout>
        <Layout>
            <EmployeeShowLayout title="Employee Details">
                <Paper elevation={2} sx={{ p: 2 }}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            borderRadius: 2,
                            p: 2,
                            bgcolor: "#F9FAFB",
                        }}
                    >
                        {/* Personal Information */}
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", mb: 1 }}
                        >
                            Personal Information
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            {/* Avatar */}
                            {/* <Avatar src= {selectedEmployee.picture ? selectedEmployee.picture : "/Images/baybay-logo.png" } /> */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 1,
                                    minWidth: 150,
                                    mt: { xs: 2, md: 0 },
                                }}
                            >
                                <Avatar
                                    sx={{ width: 200, height: 200 }}
                                    src={
                                        data.picture &&
                                        typeof data.picture === "object"
                                            ? URL.createObjectURL(data.picture)
                                            : data.picture
                                            ? `/storage/${data.picture}`
                                            : "/Images/baybay-logo.png"
                                    }
                                />
                                <Button
                                    variant="outlined"
                                    component="label"
                                    size="small"
                                >
                                    Upload Photo
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={(e) =>
                                            setData(
                                                "picture",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </Button>
                            </Box>

                            {/* Employee Info */}
                            <Box
                                sx={{
                                    flex: 2,
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 3,
                                }}
                            >
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Name
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        error={!!errors.name}
                                        helperText={errors.name}
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Education Attainment
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.education_attainment}
                                        onChange={(e) =>
                                            setData(
                                                "education_attainment",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Eligibility
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.eligibility}
                                        onChange={(e) =>
                                            setData(
                                                "eligibility",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Email
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Phone
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Address
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* Employment Details */}
                        <Box
                            sx={{
                                p: 2,
                                bgcolor: "white",
                                borderRadius: 2,
                                mb: 2,
                                boxShadow: 1,
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold", mb: 1 }}
                            >
                                Employment Details
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 3,
                                }}
                            >
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Department
                                    </Typography>
                                    {/* <FormControl fullWidth size="small">
                                        <Select
                                            displayEmpty
                                            value={data.department_id}
                                            onChange={(e) =>
                                                setData(
                                                    "department_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <MenuItem value="" disabled>
                                                Select Department
                                            </MenuItem>
                                            {departments.map((dept) => (
                                                <MenuItem
                                                    key={dept.id}
                                                    value={dept.id}
                                                >
                                                    {dept.department_name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl> */}
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Classification
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.classification}
                                        onChange={(e) =>
                                            setData(
                                                "classification",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Plantilla
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.plantilla}
                                        onChange={(e) =>
                                            setData("plantilla", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Job Description
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.job_description}
                                        onChange={(e) =>
                                            setData(
                                                "job_description",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Date Hired
                                    </Typography>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            value={
                                                data.date_hired
                                                    ? new Date(data.date_hired)
                                                    : null
                                            }
                                            inputFormat="MM/dd/yyyy" // <- This controls the displayed format
                                            onChange={(newValue) => {
                                                if (newValue) {
                                                    const formatted = format(
                                                        newValue,
                                                        "yyyy-MM-dd"
                                                    ); // <- This controls the stored value
                                                    setData(
                                                        "date_hired",
                                                        formatted
                                                    );
                                                }
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    size="small"
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Salary Grade
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.salary_grade}
                                        onChange={(e) =>
                                            setData(
                                                "salary_grade",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Years in Service
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.years_in_service}
                                        onChange={(e) =>
                                            setData(
                                                "years_in_service",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Employment Status
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.employment_status}
                                        onChange={(e) =>
                                            setData(
                                                "employment_status",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Remarks
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.remarks}
                                        onChange={(e) =>
                                            setData("remarks", e.target.value)
                                        }
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Stack spacing={2} direction="row">
                            <Button
                                component={Link}
                                href={route("employees.index")}
                                variant="contained"
                                sx={{ mt: 2 }}
                            >
                                Back to List
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={processing}
                                sx={{ mt: 2 }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
            </EmployeeShowLayout>
        </Layout>
    );
};

export default edit;
