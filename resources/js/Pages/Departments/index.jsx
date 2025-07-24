import Layout from '@/Layout/Layout';
import DepartmentTable from '@/Components/DepartmentTable';
import { Typography, Button, Box, TextField } from '@mui/material';
import { Link, router, useForm  } from '@inertiajs/react';

const index = ({ departments, filters }) => {


  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Department Dashboard</Typography>
      <Button component={Link} href="/departments/create" variant="contained" color="primary" sx={{ mb: 2 }}>
        Add Department
      </Button>
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
      <DepartmentTable departments={departments} />
    </Layout>
  );
};

export default index;
