import rawActivities from '@/static/activities.json';
import {
  applyActivityPresentationRules,
  type ActivityLike,
} from '@/utils/activity';

const activities = applyActivityPresentationRules(
  rawActivities as ActivityLike[]
);

export default activities;
