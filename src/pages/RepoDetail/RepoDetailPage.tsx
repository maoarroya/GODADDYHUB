import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Stack,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import BugReportIcon from '@mui/icons-material/BugReport';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';

import { repoSelector } from '../../selectors/repoSelector';
import { useGetRepoLanguagesQuery } from '../../services/githubApi';

import LanguagesComponent from '../../components/languagesComponent';
import RepoInfoItem from '../../components/repoInfoItem';
import PageHeader from '../../components/pageHeader';

function RepoDetailPage() {
  const params = useParams<{ name?: string }>();
  const name = params.name ?? '';
  const repo = repoSelector(name);
  const navigate = useNavigate();

  useEffect(() => {
    if (!repo) {
      navigate('/', { replace: true });
    }
  }, [repo, navigate]);

  const {
    data: languages,
    isLoading: isLangLoading,
    isError: isLangError,
  } = useGetRepoLanguagesQuery(repo?.languages_url ?? '', {
    skip: !repo?.languages_url,
  });

  const renderLicenseInfo = () => {
    const spdx = repo?.license?.spdx_id;
    const name = repo?.license?.name;
    const url = repo?.license?.url;

    return (
      <>
        {spdx || 'N/A'}
        {spdx && name ? ` / ${name}` : ''}
        {spdx && url ? (
          <>
            {' '}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'info.main' }}
            >
              (details)
            </a>
          </>
        ) : null}
      </>
    );
  };

  if (!repo) return null;

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 700, mx: 'auto' }}>
      <PageHeader title="GoDaddyHub" />
      <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 2, position: 'relative' }}>
        <Tooltip title="View on GitHub">
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              bgcolor: 'white',
              border: 'none',
              color: 'info.main',
              width: 40,
              height: 40,
              zIndex: 2,
              boxShadow: '0 2px 8px 0 rgba(27,219,219,0.10)',
              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(repo.html_url, '_blank', 'noopener,noreferrer');
            }}
          >
            <GitHubIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Tooltip>
        <CardContent>
          <Typography variant="h6" fontWeight={700} mb={1}>
            {repo.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {repo.description || 'No description provided.'}
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center" mb={2}>
            <RepoInfoItem icon={<StarIcon />} value={repo.watchers_count} />
            <RepoInfoItem icon={<ForkRightIcon />} value={repo.forks_count} />
            <RepoInfoItem
              icon={<VisibilityIcon />}
              value={repo.watchers_count}
            />
            <RepoInfoItem
              icon={<BugReportIcon />}
              value={repo.open_issues_count}
            />
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack direction="row" spacing={2} alignItems="center" mb={1}>
            <Typography variant="body2" fontWeight={700}>
              License:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {renderLicenseInfo()}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" fontWeight={700}>
              Last update:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {repo.updated_at
                ? new Date(repo.updated_at).toLocaleDateString()
                : 'N/A'}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={700} mb={2}>
            Languages
          </Typography>
          {isLangLoading && <CircularProgress size={20} />}
          {isLangError && (
            <Alert severity="error">Error loading languages</Alert>
          )}
          {languages && <LanguagesComponent languages={languages} />}
        </CardContent>
      </Card>
    </Box>
  );
}

export default RepoDetailPage;
