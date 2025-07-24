import Layout from '@/Layout/Layout';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from '@inertiajs/react';

const edit = ({ department }) => {
  const { data, setData, put, processing, errors } = useForm({
    name: department.department_name,
    email: department.department_head,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/departments/${employee.id}`, {
      onSuccess: () => {
        alert('Department updated!');
      },
    });
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Edit Employee</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Position"
          value={data.position}
          onChange={(e) => setData('position', e.target.value)}
          error={!!errors.position}
          helperText={errors.position}
        />
        <Button type="submit" variant="contained" color="primary" disabled={processing}>
          Update Employee
        </Button>
      </Box>
    </Layout>
  );
};

export default edit;
