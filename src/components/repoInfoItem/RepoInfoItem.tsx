import { Stack, Typography, IconButton } from '@mui/material';
import type { ReactNode } from 'react';

interface RepoInfoItemProps {
  icon: ReactNode;
  value: number | string;
}

const RepoInfoItem: React.FC<RepoInfoItemProps> = ({ icon, value }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <IconButton sx={{ color: 'info.main' }}>{icon}</IconButton>
    <Typography fontWeight={400} fontSize={14} color="text.secondary">
      {value}
    </Typography>
  </Stack>
);

export default RepoInfoItem;
