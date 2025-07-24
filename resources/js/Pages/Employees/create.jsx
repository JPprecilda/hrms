import Layout from "@/Layout/Layout";
import {
    TextField,
    Button,
    Typography,
    Box,
    MenuItem,
    FormControl,
    Select,
    Avatar,
    Paper,
    Link,
    Stack,
} from "@mui/material";
import { useForm } from "@inertiajs/react";
import React from "react";
import EmployeeShowLayout from "@/components/EmployeeShowLayout";

const Create = ({ departments }) => {
    const { data, setData, post, processing, errors } = useForm({
        // name: "",
        // education_attainment: "",
        // eligibility: "",
        // email: "",
        // phone: "",
        // address: "",
        // classification: "",
        // plantilla: "",
        // job_description: "",
        // date_hired: "",
        // salary_grade: "",
        // years_in_service: "",
        // employment_status: "",
        // remarks: "",
        // picture: null,
        department_id: "",
        name: "",
        sex: "",
        civil_status: "",
        birthday: "",
        place_of_birth: "",
        citizenship: "",
        address: "",
        height: "",
        weight: "",
        facebook_account: "",
        email: "",
        contact_number: "",
        educational_attainment: "",
        course: "",
        employment_type: "",
        gsis_number: "",
        pagibig_number: "",
        philhealth_number: "",
        sss_number: "",
        tin_number: "",
        employment_number: "",
        plantilla_position: "",
        salarygrade: "",
        lengthofservice: "",
        regularization_date: "",
        date_hired: "",
        career_service_eligibility: "",
        career_service_date_granted: "",
        type_board_exam: "",
        ncII_type: "",
        picture: null,
        
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value !== null) {
                formData.append(key, value);
            }
        });

        post("/employees", {
            data: formData,
            forceFormData: true,
            onSuccess: () => alert("Employee added!"),
        });
    };



    return (
        <Layout>
            <EmployeeShowLayout title="Employee Details">
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
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
                                        Sex
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.sex}
                                        onChange={(e) =>
                                            setData(
                                                "sex",
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
                                        Civil Status
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.civil_status}
                                        onChange={(e) =>
                                            setData(
                                                "civil_status",
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
                                        Birth Date:
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.birthday}
                                        onChange={(e) =>
                                            setData("birthday", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Place of Birth
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.place_of_birth}
                                        onChange={(e) =>
                                            setData("place_of_birth", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Citizenship
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.citizenship}
                                        onChange={(e) =>
                                            setData("citizenship", e.target.value)
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
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Height
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.height}
                                        onChange={(e) =>
                                            setData("height", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Weight
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.weight}
                                        onChange={(e) =>
                                            setData("weight", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Facebook Account
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.facebook_account}
                                        onChange={(e) =>
                                            setData("facebook_account", e.target.value)
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
                                        Contact Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.contact_number}
                                        onChange={(e) =>
                                            setData("contact_number", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Educational Attainment
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.educational_attainment}
                                        onChange={(e) =>
                                            setData("educational_attainment", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Course
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.course}
                                        onChange={(e) =>
                                            setData("course", e.target.value)
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
                                    <FormControl fullWidth size="small">
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
                                    </FormControl>
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Employment Type
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.employment_type}
                                        onChange={(e) =>
                                            setData(
                                                "employment_type",
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
                                        GSIS Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.gsis_number}
                                        onChange={(e) =>
                                            setData("gsis_number", e.target.value)
                                        }
                                    />
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
                                        value={data.salarygrade}
                                        onChange={(e) =>
                                            setData("salarygrade", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Pagibig Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.pagibig_number}
                                        onChange={(e) =>
                                            setData(
                                                "pagibig_number",
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
                                        Philhealth Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.philhealth_number}
                                        onChange={(e) =>
                                            setData(
                                                "philhealth_number",
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
                                        SSS Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.sss_number}
                                        onChange={(e) =>
                                            setData(
                                                "sss_number",
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
                                        TIN Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.tin_number}
                                        onChange={(e) =>
                                            setData(
                                                "tin_number",
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
                                        Employment Number
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.employment_number}
                                        onChange={(e) =>
                                            setData(
                                                "employment_number",
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
                                        Plantilla Position
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.plantilla_position}
                                        onChange={(e) =>
                                            setData(
                                                "plantilla_position",
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
                                        value={data.lengthofservice}
                                        onChange={(e) =>
                                            setData(
                                                "lengthofservice",
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
                                        Regularization Date
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.regularization_date}
                                        onChange={(e) =>
                                            setData(
                                                "regularization_date",
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
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Date Hired
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.date_hired}
                                        onChange={(e) =>
                                            setData("date_hired", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        career_service_eligibility
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.career_service_eligibility}
                                        onChange={(e) =>
                                            setData("career_service_eligibility", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        career_service_date_granted
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.career_service_date_granted}
                                        onChange={(e) =>
                                            setData("career_service_date_granted", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        type_board_exam
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.type_board_exam}
                                        onChange={(e) =>
                                            setData("type_board_exam", e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ flex: "1 1 200px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        ncII_type
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={data.ncII_type}
                                        onChange={(e) =>
                                            setData("ncII_type", e.target.value)
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
            </EmployeeShowLayout>
        </Layout>
    );
};

export default Create;
