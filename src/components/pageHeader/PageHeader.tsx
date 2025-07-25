import { Box, Typography } from '@mui/material';

const PageHeader = ({ title }: { title: string }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <Typography
      variant="h4"
      gutterBottom
      mb={8}
      fontWeight={600}
      color="primary.main"
      data-testid="page-title"
    >
      {title}
    </Typography>
  </Box>
);

export default PageHeader;
