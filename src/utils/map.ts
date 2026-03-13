interface MapRuntimeConfigInput {
  vendor: string;
  styleUrl: string;
  mapboxToken?: string;
}

interface MapRuntimeConfig {
  mapStyle: string;
  mapboxAccessToken?: string;
  shouldAttachMapboxLanguage: boolean;
}

export const getMapRuntimeConfig = ({
  vendor,
  styleUrl,
  mapboxToken,
}: MapRuntimeConfigInput): MapRuntimeConfig => {
  const isMapboxVendor = vendor === 'mapbox';

  return {
    mapStyle: styleUrl,
    mapboxAccessToken: isMapboxVendor ? mapboxToken : undefined,
    shouldAttachMapboxLanguage: isMapboxVendor,
  };
};
