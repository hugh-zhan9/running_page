import test from 'node:test';
import assert from 'node:assert/strict';

import {
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
