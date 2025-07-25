import { LANGUAGE_COLORS } from '../constants';
import type { LanguagePercent } from '../types';

export const pluralize = (count: number, singular: string, plural: string) =>
  `${count} ${count === 1 ? singular : plural}`;

export const getLangColor = (idx: number): string =>
  LANGUAGE_COLORS[idx % LANGUAGE_COLORS.length];

export const getLanguagePercents = (
  languages: Record<string, number>,
): LanguagePercent[] => {
  const total = Object.values(languages).reduce((sum, val) => sum + val, 0);
  return Object.entries(languages).map(([name, value]) => ({
    name,
    percent: total ? Math.round((value / total) * 1000) / 10 : 0,
  }));
};
