import Layout from '@/Layout/Layout';
import EmployeeTable from '@/Components/EmployeeTable';
import { Typography, Button, Box, TextField } from '@mui/material';
import { Link, router, useForm  } from '@inertiajs/react';

const index = ({ employees, filters }) => {
    // const { data, setData, get } = useForm({
    //     search: filters.search || ''
    // });

    // const submit = (e) => {
    //     e.preventDefault();
    //     get(route('employees.index'));
    // };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Employee Dashboard</Typography>
      {/* <Button component={Link} href="/employees/create" variant="contained" color="primary" sx={{ mb: 2 }}>
        Add Employee
      </Button> */}
      {/* <Box>
        <form onSubmit={submit}>
            <TextField
                label="Search Employee"
                value={data.search}
                onChange={(e) => setData('search', e.target.value)}
                variant='outlined'
                size='small'
                sx={{ mb: 2, mr: 1}}
            />
            <Button variant='contained' type='submit'>Search</Button>
        </form>
      </Box> */}
      <EmployeeTable employees={employees} />
    </Layout>
  );
};

export default index;
