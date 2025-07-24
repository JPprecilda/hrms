import Layout from '@/Layout/Layout';
import { TextField, Button, Typography, Box, Stack } from '@mui/material';
import { useForm, router } from '@inertiajs/react';
import { useEffect } from 'react';

const SearchEmployee = ({ searchTerm = '' }) => {
  const { data, setData, get, processing } = useForm({
    search: searchTerm,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    get('/employees', {
      preserveState: true,
      preserveScroll: true,
    });
  };

  // 👉 Live search effect when key changes
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      get('/employees', {
        preserveState: true,
        preserveScroll: true,
      });
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce);
  }, [data.search]);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Search Employees</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Search"
            value={data.search}
            onChange={(e) => setData('search', e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" disabled={processing}>
            Search
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default SearchEmployee;
