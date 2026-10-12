import type { YearMonth } from '../data/resume';

const monthFormat = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatMonth = (value: YearMonth): string =>
  monthFormat.format(new Date(`${value}-01T00:00:00Z`));
