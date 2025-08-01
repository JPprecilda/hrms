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
  Divider,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import EmployeeShowLayout from "@/components/EmployeeShowLayout";

const TabPanel = ({ children, value, index }) => {
  return value === index ? <Box sx={{ pt: 2 }}>{children}</Box> : null;
};

const Create = ({ departments }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [touched, setTouched] = useState({});
  const [clientErrors, setClientErrors] = useState({});

  const { data, setData, post, processing, errors } = useForm({
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
    employment_status: "",
    remarks: "",
    career_service_eligibility: "",
    career_service_date_granted: "",
    type_board_exam: "",
    ncII_type: "",
    picture: null,
  });

  const validateField = (name, value) => {
    let error = "";

    if (["name", "email", "contact_number"].includes(name)) {
      if (!value.trim()) {
        error = `${labelCase(name)} is required`;
      }
    }

    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email address";
      }
    }

    setClientErrors((prev) => ({ ...prev, [name]: error }));
  };

  const labelCase = (str) =>
    str
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Validate all fields before submitting
    ["name", "email", "contact_number"].forEach((field) =>
      validateField(field, data[field])
    );

    const hasClientErrors = Object.values(clientErrors).some((e) => e);
    if (hasClientErrors) {
      alert("Please fix form errors before submitting.");
      return;
    }

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

  const renderField = (label, fieldName, multiline = false) => (
    <Box sx={{ flex: "1 1 250px" }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <TextField
        fullWidth
        size="small"
        value={data[fieldName]}
        onChange={(e) => {
          const value = e.target.value;
          setData(fieldName, value);
          validateField(fieldName, value);
        }}
        onBlur={() => setTouched((prev) => ({ ...prev, [fieldName]: true }))}
        multiline={multiline}
        error={!!(touched[fieldName] && (clientErrors[fieldName] || errors[fieldName]))}
        helperText={
          touched[fieldName] && (clientErrors[fieldName] || errors[fieldName])
        }
      />
    </Box>
  );

  return (
    <Layout>
      <EmployeeShowLayout title="Create Employee">
        <Box component="form" onSubmit={handleSubmit}>
          <Tabs
            value={tabIndex}
            onChange={(e, newValue) => setTabIndex(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
          >
            <Tab label="Personal" />
            <Tab label="Employment" />
            <Tab label="Education & Eligibility" />
            <Tab label="IDS & Benefits" />
          </Tabs>

          {/* Personal Info */}
          <TabPanel value={tabIndex} index={0}>
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    minWidth: 200,
                  }}
                >
                  <Avatar
                    sx={{ width: 150, height: 150 }}
                    src={
                      data.picture && typeof data.picture === "object"
                        ? URL.createObjectURL(data.picture)
                        : data.picture
                        ? `/storage/${data.picture}`
                        : "/Images/baybay-logo.png"
                    }
                  />
                  <Button variant="outlined" component="label" size="small">
                    Upload Photo
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) => setData("picture", e.target.files[0])}
                    />
                  </Button>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, flex: 1 }}>
                  {renderField("Name", "name")}
                  {renderField("Sex", "sex")}
                  {renderField("Civil Status", "civil_status")}
                  {renderField("Birthday", "birthday")}
                  {renderField("Place of Birth", "place_of_birth")}
                  {renderField("Citizenship", "citizenship")}
                  {renderField("Address", "address")}
                  {renderField("Height", "height")}
                  {renderField("Weight", "weight")}
                  {renderField("Facebook", "facebook_account")}
                  {renderField("Email", "email")}
                  {renderField("Contact Number", "contact_number")}
                </Box>
              </Stack>
            </Paper>
          </TabPanel>

          {/* Employment */}
          <TabPanel value={tabIndex} index={1}>
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Employment Information
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ flex: "1 1 250px" }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Department
                  </Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={data.department_id}
                      displayEmpty
                      onChange={(e) => setData("department_id", e.target.value)}
                    >
                      <MenuItem value="" disabled>
                        Select Department
                      </MenuItem>
                      {departments.map((dept) => (
                        <MenuItem key={dept.id} value={dept.id}>
                          {dept.department_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                {renderField("Employment Type", "employment_type")}
                {renderField("Employment Number", "employment_number")}
                {renderField("Plantilla Position", "plantilla_position")}
                {renderField("Salary Grade", "salarygrade")}
                {renderField("Years in Service", "lengthofservice")}
                {renderField("Regularization Date", "regularization_date")}
                {renderField("Date Hired", "date_hired")}
                {renderField("Employment Status", "employment_status")}
                {renderField("Remarks", "remarks", true)}
              </Box>
            </Paper>
          </TabPanel>

          {/* Education & Eligibility */}
          <TabPanel value={tabIndex} index={2}>
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Education & Eligibility
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {renderField("Educational Attainment", "educational_attainment")}
                {renderField("Course", "course")}
                {renderField("Career Service Eligibility", "career_service_eligibility")}
                {renderField("Date Granted", "career_service_date_granted")}
                {renderField("Board Exam Type", "type_board_exam")}
                {renderField("NC II Type", "ncII_type")}
              </Box>
            </Paper>
          </TabPanel>

          {/* IDS & Benefits */}
          <TabPanel value={tabIndex} index={3}>
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                IDs & Benefits
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {renderField("GSIS Number", "gsis_number")}
                {renderField("Pagibig Number", "pagibig_number")}
                {renderField("Philhealth Number", "philhealth_number")}
                {renderField("SSS Number", "sss_number")}
                {renderField("TIN Number", "tin_number")}
              </Box>
            </Paper>
          </TabPanel>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              href={route("employees.index")}
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
