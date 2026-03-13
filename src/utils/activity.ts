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

export interface ActivityLike {
  run_id: number;
  name: string;
  type: string;
  subtype?: string | null;
  start_date: string;
  start_date_local: string;
  distance: number;
  moving_time: string;
  average_speed: number;
  elevation_gain: number | null;
  streak: number;
}

const MORNING_RUN_OVERRIDE = {
  startDateLocal: '2026-03-13 08:13:15',
  name: '清晨跑步',
  type: 'Run',
  subtype: 'Run',
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

export const applyActivityPresentationRules = <T extends ActivityLike>(
  activities: T[]
): T[] => {
  return activities
    .map((activity) => {
      if (activity.start_date_local === MORNING_RUN_OVERRIDE.startDateLocal) {
        return {
          ...activity,
          name: MORNING_RUN_OVERRIDE.name,
          type: MORNING_RUN_OVERRIDE.type,
          subtype: MORNING_RUN_OVERRIDE.subtype,
        };
      }
      return activity;
    })
    .filter((activity) => normalizeActivityType(activity.type) !== 'walking');
};
