import test from 'node:test';
import assert from 'node:assert/strict';

import {
  applyActivityPresentationRules,
  getActivityLabel,
  normalizeActivityType,
  shouldUseRunTitles,
} from './activity';

test('normalizeActivityType keeps walking distinct from running', () => {
  assert.equal(normalizeActivityType('Walk'), 'walking');
  assert.equal(normalizeActivityType('walking'), 'walking');
  assert.equal(normalizeActivityType('Run'), 'running');
});

test('walking activities do not use run-only titles', () => {
  assert.equal(shouldUseRunTitles('Walk'), false);
  assert.equal(getActivityLabel('Walk', '步行', '跑步'), '步行');
});

test('presentation rules convert the target walk into a morning run', () => {
  const [activity] = applyActivityPresentationRules([
    {
      run_id: 1,
      name: 'Walk from keep',
      distance: 5000,
      moving_time: '0:33:24',
      type: 'Walk',
      subtype: 'Walk',
      start_date: '2026-03-13 00:13:15',
      start_date_local: '2026-03-13 08:13:15',
      average_speed: 2.4,
      elevation_gain: 0,
      streak: 1,
    },
  ]);

  assert.equal(activity.type, 'Run');
  assert.equal(activity.subtype, 'Run');
  assert.equal(activity.name, '清晨跑步');
});

test('presentation rules hide remaining walking activities', () => {
  const activities = applyActivityPresentationRules([
    {
      run_id: 1,
      name: 'Walk from keep',
      distance: 5000,
      moving_time: '0:33:24',
      type: 'Walk',
      subtype: 'Walk',
      start_date: '2026-03-13 00:13:15',
      start_date_local: '2026-03-13 08:13:15',
      average_speed: 2.4,
      elevation_gain: 0,
      streak: 1,
    },
    {
      run_id: 2,
      name: '晨间行走',
      distance: 1300,
      moving_time: '0:18:12',
      type: 'Walk',
      subtype: 'Walk',
      start_date: '2023-07-03 00:34:40',
      start_date_local: '2023-07-03 08:34:40',
      average_speed: 1.2,
      elevation_gain: 0,
      streak: 1,
    },
  ]);

  assert.equal(activities.length, 1);
  assert.equal(activities[0].name, '清晨跑步');
});
