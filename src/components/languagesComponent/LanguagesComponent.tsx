import { Box, Typography } from '@mui/material';
import { getLangColor, getLanguagePercents } from '../../utils';
import type { RepoLanguages } from '../../types';

interface LanguagesComponentProps {
  languages: RepoLanguages;
}

const LanguagesComponent: React.FC<LanguagesComponentProps> = ({
  languages,
}) => {
  const langPercents = getLanguagePercents(languages || {});

  const renderBarSegments = () => {
    let left = 0;

    return langPercents.map((lang, i) => {
      const width = lang.percent;
      const color = getLangColor(i);
      const segment = (
        <Box
          key={lang.name}
          sx={{
            position: 'absolute',
            left: `${left}%`,
            width: `${width}%`,
            height: '100%',
            bgcolor: color,
            transition: 'width 0.3s',
          }}
        />
      );
      left += width;
      return segment;
    });
  };

  const renderLegend = () =>
    langPercents.map((lang, i) => (
      <Box
        key={lang.name}
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Box
          sx={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            bgcolor: getLangColor(i),
          }}
        />
        <Typography fontSize={16} fontWeight={500}>
          {lang.name}
        </Typography>
        <Typography fontSize={16} color="text.secondary">
          {lang.percent}%
        </Typography>
      </Box>
    ));

  return (
    <Box sx={{ mb: 2, px: 1 }}>
      <Box
        sx={{
          height: 10,
          borderRadius: 5,
          bgcolor: '#e6e6e6',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {renderBarSegments()}
      </Box>
      <Box sx={{ display: 'flex', mt: 1, flexWrap: 'wrap', gap: 3 }}>
        {renderLegend()}
      </Box>
    </Box>
  );
};

export default LanguagesComponent;
