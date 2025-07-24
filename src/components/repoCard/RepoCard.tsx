import { Card, Box, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import BugReportIcon from '@mui/icons-material/BugReport';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import type { Repo } from '../../types';
import Badge from './badge';
import { useNavigate } from 'react-router-dom';
import { pluralize } from '../../utils';

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const navigate = useNavigate();
  const badges = [
    {
      icon: CodeIcon,
      label: repo.language,
      title: `Main language: ${repo.language}`,
    },
    {
      icon: StarIcon,
      label: repo.watchers_count,
      title: pluralize(repo.watchers_count, 'star', 'stars'),
    },
    {
      icon: VisibilityIcon,
      label: repo.watchers_count,
      title: pluralize(repo.watchers_count, 'watcher', 'watchers'),
    },
    {
      icon: ForkRightIcon,
      label: repo.forks_count,
      title: pluralize(repo.forks_count, 'fork', 'forks'),
    },
    {
      icon: BugReportIcon,
      label: repo.open_issues_count,
      title: pluralize(repo.open_issues_count, 'issue', 'issues'),
    },
  ]

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        boxShadow: '0 4px 24px 0 rgba(128, 137, 137, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 410,
        maxWidth: 410,
        minHeight: 200,
        height: '100%',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.2s',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          boxShadow: '0 8px 32px 0 rgba(126, 139, 139, 0.22)',
        },
      }}
      onClick={() => navigate(`/repo/${repo.name}`)}
    >
      <Tooltip title="View on GitHub">
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'white',
            border: 'none',
            color: "info",
            width: 40,
            height: 40,
            zIndex: 2,
            '&:hover': {
              bgcolor: '#f5f5f5',
            },
          }}
          onClick={e => {
            e.stopPropagation();
            window.open(repo.html_url, '_blank', 'noopener,noreferrer');
          }}
        >
          <GitHubIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Tooltip>
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <FolderIcon sx={{ color: "info", fontSize: 36 }} />
        <Tooltip title={repo.name}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ fontSize: 20, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}
            noWrap
          >
            {repo.name}
          </Typography>
        </Tooltip>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
        {repo.description || 'No description provided.'}
      </Typography>

      <Box display="flex" flexDirection="column" gap={1} mt="auto">
        <Stack direction="row" spacing={1}>
          {badges.map((badge) => (
            <Tooltip key={badge.title} title={badge.title}>
              <span onClick={e => e.stopPropagation()}>
                <Badge icon={<badge.icon sx={{ color: "info", fontSize: 18 }} />} label={badge.label} />
              </span>
            </Tooltip>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default RepoCard;
