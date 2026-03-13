import test from 'node:test';
import assert from 'node:assert/strict';

import { getMapRuntimeConfig } from './map';

test('third-party map vendors do not require a Mapbox token', () => {
  assert.deepEqual(
    getMapRuntimeConfig({
      vendor: 'mapcn_openfreemap',
      mapboxToken: '',
      styleUrl: 'https://tiles.openfreemap.org/styles/bright',
    }),
    {
      mapStyle: 'https://tiles.openfreemap.org/styles/bright',
      mapboxAccessToken: undefined,
      shouldAttachMapboxLanguage: false,
    }
  );
});

test('mapbox vendor still passes mapbox token and language plugin flag', () => {
  assert.deepEqual(
    getMapRuntimeConfig({
      vendor: 'mapbox',
      mapboxToken: 'pk.test',
      styleUrl: 'mapbox://styles/mapbox/dark-v11',
    }),
    {
      mapStyle: 'mapbox://styles/mapbox/dark-v11',
      mapboxAccessToken: 'pk.test',
      shouldAttachMapboxLanguage: true,
    }
  );
});
