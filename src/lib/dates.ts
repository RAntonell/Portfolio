export type YearMonth = `${number}-${number}`;

export interface Period {
  start: YearMonth;
  end?: YearMonth;
}

const monthFormat = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatMonth = (value: YearMonth): string =>
  monthFormat.format(new Date(`${value}-01T00:00:00Z`));

const monthIndex = (value: YearMonth): number => {
  const [year = 0, month = 0] = value.split('-').map(Number);
  return year * 12 + month;
};

export const yearsAcross = (periods: Period[], now = new Date()): number => {
  const currentMonth = now.getUTCFullYear() * 12 + now.getUTCMonth() + 1;
  const months = periods.reduce(
    (total, { start, end }) => total + (end ? monthIndex(end) : currentMonth) - monthIndex(start) + 1,
    0,
  );
  return Math.floor(months / 12);
};
