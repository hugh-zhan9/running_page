const ACTIVITY_TYPE_MAP: Record<string, string> = {
  Run: 'running',
  running: 'running',
  Walk: 'walking',
  walking: 'walking',
  Ride: 'cycling',
  cycling: 'cycling',
  Hike: 'hiking',
  hiking: 'hiking',
  Swim: 'swimming',
  swimming: 'swimming',
  Ski: 'skiing',
  skiing: 'skiing',
};

export const normalizeActivityType = (type?: string | null): string => {
  if (!type) return '';
  return ACTIVITY_TYPE_MAP[type] ?? type;
};

export const shouldUseRunTitles = (type?: string | null): boolean => {
  return normalizeActivityType(type) === 'running';
};

export const getActivityLabel = (
  type: string | null | undefined,
  fallbackLabel: string,
  runLabel: string
): string => {
  return shouldUseRunTitles(type) ? runLabel : fallbackLabel;
};
