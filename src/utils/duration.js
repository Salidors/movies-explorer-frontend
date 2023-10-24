export const formatDuration = (value) => {
  if (value < 60) return `${value}м`;

  const hours = Number.parseInt(value / 60);
  const mins = value - hours * 60;

  return `${hours}ч ${mins}м`;
};
