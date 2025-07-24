import {
  CircularProgress,
  Alert,
  Grid,
  Box,
  Typography
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useGetOrgReposQuery } from '../../services/githubApi';
import RepoCard from '../../components/repoCard/RepoCard';

function RepoListPage() {
  const { data, isLoading, isError } = useGetOrgReposQuery('godaddy');

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress data-testid="loading-indicator" />
      </Box>
    );
  }

  if (isError) {
    // TODO: Add better error handling

    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Alert severity="error" icon={<ErrorOutlineIcon />} data-testid="error-message">Error loading repositories</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main" data-testid="page-title" align="center">
        GoDaddyHub
      </Typography>
      <Typography mt={5} mb={8} variant="body2" color="text.secondary" data-testid="page-description" align="center">
        Welcome to GoDaddyHub — your gateway to exploring GoDaddy’s open-source ecosystem.
      </Typography>
      <Box maxWidth={1400} mx="auto">
        <Grid container spacing={2} justifyContent="center">
          {data?.map((repo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={repo.id} data-testid="repo-card">
              <RepoCard repo={repo} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RepoListPage;
