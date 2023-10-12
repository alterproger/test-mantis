// material-ui
import { PlusOutlined } from '@ant-design/icons';
import { Box, Button, Typography, Grid } from '@mui/material';

// project import
import Notifications from 'sections/widget/Notifications';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <>
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
    <Grid container spacing={2}>
      <Grid item xs={8} sm={8}>
        Content for the first column
      </Grid>
      <Grid item xs={4} sm={4}>
        <Notifications />
      </Grid>
    </Grid>
  </>
);

export default SamplePage;
