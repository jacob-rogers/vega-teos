export const getBaseApiUrl = (): string => {
  if (!process.env.BASE_API_URL || process.env.BASE_API_URL === '/') {
    return window.location.origin;
  }

  return process.env.BASE_API_URL.indexOf('://') > -1
    ? process.env.BASE_API_URL
    : window.location.origin + process.env.BASE_API_URL;
};

export const getGraphqlUri = (projectId: string): string =>
  `${getBaseApiUrl()}/graphql/${projectId}`;
