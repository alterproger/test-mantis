// material-ui
import { PlusOutlined } from '@ant-design/icons';
import { Box, Button, Typography } from '@mui/material';

// project import

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
      <Typography variant="h1">Welcome, Stebin</Typography>
      <Typography variant="body2" sx={{ mt: '10px' }}>
        Monday 10, October, 2023
      </Typography>
    </div>

    <Button startIcon={<PlusOutlined />} variant="contained" sx={{ py: '9px' }}>
      Create New Task / Project
    </Button>
  </Box>
);

export default SamplePage;
