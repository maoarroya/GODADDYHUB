import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface TagProps {
  icon?: ReactNode;
  label: string | number;
}

const badge = ({ icon, label }: TagProps) => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.5,
      px: 1.5,
      py: 0.5,
      borderRadius: 999,
      bgcolor: 'primary.light',
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      maxWidth: 110,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
  >
    {icon && (
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 0.5 }}>{icon}</Box>
    )}
    <Typography
      component="span"
      sx={{
        color: '#222',
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 70,
        display: 'inline-block',
      }}
      title={String(label) || ''}
    >
      {label}
    </Typography>
  </Box>
);

export default badge;
